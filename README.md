<p align="left" >
  <img width="240"  src="src/vercel_sveltekit_frontend/static/icAcademy.png">
</p>

# VERCEL and the Internet Computer


This is a demo project to demonstrate how a Web2 frontend hosted on [VERCEL](https://vercel.com) can access a Motoko backend canister on the Internet Computer using Server Side Rendering (SSR).

In this example the frontend is a SvelteKit application and the backend is a Motoko canister running in a dedicated canister on the Internet Computer. The frontend calls a Body Mass Index (BMI) calculation function in a dedicated canister and displays the result.

>This example shows that a frontend that is NOT hosted on the Internet Computer can access a backend on the Internet Computer using Server Side Rendering (SSR).

## How to use this example

### Get the code
```bash
# create a base folder
mkdir myBmi && cd myBmi

# copy project files
npx degit https://github.com/samlinux-development/ic-vercel-sveltekit-2

# install dependencies
npm install
```

This project uses a special canister for the bmi calculation. The canister is already deployed on the Internet Computer and can be reached with the following canisterId: `yegl5-fyaaa-aaaak-qda4a-cai` (see Candid UI link below).

### Run the project locally
To run this project locally, you need to set the environment variable `BACKEND_CANISTER_ID` to the canisterId of your local Internet Computer replica backend canister. You can do this by changing the **localCanisterId** in the `lib/server/declarations/backend/index.js` file.

```bash
# start a local replica
dfx start --background

# deploy the backend canister
cd backend
dfx deploy

# start the frontend
cd ../src/vercel_sveltekit_frontend
npm run start
``` 

### Run the project on VERCEL
To run a SvelteKit project on VERCEL follow the instructions in the [Vercel documentation](https://vercel.com/docs/frameworks/sveltekit). The main steps can be summarized as follows:

- Create a VERCEL account, if you don't have one
- Create a new Github Repository and push your project code to the repository
- Create a new project in VERCEL and link it to the Github repository
- Configure the project settings in VERCEL, espaecially the environment variables
  - DFX_NETWORK = "ic"
  - BACKEND_CANISTER_ID = "yegl5-fyaaa-aaaak-qda4a-cai" (or your own canister id)
- Deploy the project to Github


## Links

Running example:  
https://ic-vercel-sveltekit-2-vercel-sveltekit-frontend.vercel.app/

The Candid UI can be seen at:  
https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=yegl5-fyaaa-aaaak-qda4a-cai

The source code of the Motoko code can be seen at:   
https://github.com/samlinux-development/ic-vercel-sveltekit-2/blob/main/backend/canister/main.mo

Test
