import { Action } from '@ngrx/store';

export const MSISDN = '[Account Details] MSISDN';
export const AUTHORIZED = '[Account Details] Logged In';
export const UNAUTHORIZED = '[Account Details] Logged out';
export const DETAILS = '[Account Details] Customer Details';
export class StoreAccountMSISDNAction implements Action {
    readonly type = MSISDN;
    constructor(public payload: string) {}
};

export class AuthorizeAccountAction implements Action {
  readonly type = AUTHORIZED;
}
export class UnAuthorizeAccountAction implements Action {
  readonly type = UNAUTHORIZED;
}
export class StoreDetailsAction implements Action {
  readonly type = DETAILS;
  constructor(public payload: any) {}
}
export type Actions
  = StoreAccountMSISDNAction
  | AuthorizeAccountAction
  | UnAuthorizeAccountAction
  | StoreDetailsAction;
