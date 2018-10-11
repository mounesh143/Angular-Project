import { Action } from '@ngrx/store';

export const ADD_PRODUCT = '[PRODUCT] Add Product';
export const CHECK_AVAILABILITY = '[PRODUCT] Check Availability';
export const CUSTOMER_DETAILS = '[PRODUCT] Customer Details';
export const RESERVE_SLOT = '[PRODUCT] Reserve Slot';
export const SLOT_RESERVED = '[PRODUCT] Slot Reserved';

export class AddProductAction implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: string) { }
}
export class CheckAvailabilityAction implements Action {
  readonly type = CHECK_AVAILABILITY;
}
export class CustomerDetailsAction implements Action {
  readonly type = CUSTOMER_DETAILS;
}
export class ReserveSlotAction implements Action {
  readonly type = RESERVE_SLOT;
}
export class SlotReservedAction implements Action {
  readonly type = SLOT_RESERVED;
}
export type Actions
  = AddProductAction
  | CheckAvailabilityAction
  | CustomerDetailsAction
  | ReserveSlotAction
  | SlotReservedAction;
