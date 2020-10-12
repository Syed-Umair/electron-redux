  import { Middleware, Store, AnyAction } from "redux";
  export const forwardToRenderer: Middleware;
  export const forwardToMain: Middleware;
  export const triggerAlias: Middleware;
  export function replayActionMain(store: Store, callback: Function): void;
  export function replayActionRenderer(store: Store, callback: Function): void;
  export function getInitialStateRenderer<T>(): T;
  export type ForwardToMainParams = { blacklist?: RegExp[] };
  export function forwardToMainWithParams(
    params?: ForwardToMainParams
  ): Middleware;

  export type AliasedAction<T extends string, U extends any[]> = {
    type: "ALIASED";
    payload: U;
    meta: {
      trigger: T;
    };
  };

  export function createAliasedAction<T extends string, U extends any[]>(
    name: T,
    actionCreator: (...args: U) => AnyAction
  ): (...args: U) => AliasedAction<T, U>;
