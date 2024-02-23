import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Entry { 'desc' : string, 'name' : string }
export type Error = { 'NotAuthorized' : null } |
  { 'NoRecord' : null };
export type Result = { 'ok' : [] | [Entry] } |
  { 'err' : Error };
export type Result_1 = { 'ok' : null } |
  { 'err' : Error };
export interface _SERVICE {
  'bmi' : ActorMethod<[number, number], number>,
  'get' : ActorMethod<[bigint], [] | [Entry]>,
  'installer' : ActorMethod<[], Result_1>,
  'search' : ActorMethod<[string], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
