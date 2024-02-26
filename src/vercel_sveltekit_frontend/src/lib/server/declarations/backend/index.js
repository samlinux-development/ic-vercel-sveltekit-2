import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from "./backend.did.js";
export { idlFactory } from "./backend.did.js";

/* CANISTER_ID is replaced by webpack based on node environment
 * Note: canister environment variable will be standardized as
 * process.env.CANISTER_ID_<CANISTER_NAME_UPPERCASE>
 * beginning in dfx 0.15.0
 */

/** Environment variables are set in the Vercels administration
  * process.env.DFX_NETWORK
  * process.env.BACKEND_CANISTER_ID
  * bkyz2-fmaaa-aaaaa-qaaaq-cai is the local backend canister id
  */

const localCanisterId = 'bkyz2-fmaaa-aaaaa-qaaaq-cai';
export const canisterId = process.env.BACKEND_CANISTER_ID || localCanisterId;

export const createActor = (canisterId, options = {}) => {

  const hostOptions = {
    host:
      process.env.DFX_NETWORK === "ic"
        ? `https://${canisterId}.ic0.app`
        : 'http://127.0.0.1:4943',
  };

  if (!options) {
    options = {
      agentOptions: hostOptions,
    };
  } else if (!options.agentOptions) {
    options.agentOptions = hostOptions;
  } else {
    options.agentOptions.host = hostOptions.host;
  }

  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  // Fetch root key for certificate validation during development
  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};
