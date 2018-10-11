import * as product from '../actions/product';

export interface State {
  productName: string;
  checkAvailability: boolean;
  reserveSlot: boolean;
}

const initialState: State = {
  productName: '',
  checkAvailability: true,
  reserveSlot: true
};

export function reducer(state = initialState, action: product.Actions): State {
  switch (action.type) {
    case product.ADD_PRODUCT: {
      return  {
        productName: action.payload,
        checkAvailability: state.checkAvailability,
        reserveSlot: state.reserveSlot
      };
    }
    case product.CHECK_AVAILABILITY: {
      return {
        productName: state.productName,
        checkAvailability: true,
        reserveSlot: state.reserveSlot
      };
    }
    case product.CUSTOMER_DETAILS: {
      return {
        productName: state.productName,
        checkAvailability: false,
        reserveSlot: state.reserveSlot
      };
    }
    case product.RESERVE_SLOT: {
      return {
        productName: state.productName,
        checkAvailability: state.checkAvailability,
        reserveSlot: true
      };
    }
    case product.SLOT_RESERVED: {
      return {
        productName: state.productName,
        checkAvailability: state.checkAvailability,
        reserveSlot: false
      };
    }
    default: return state;
  }
}

export const getProductName = (state: State) => state.productName;
export const getCheckAvailability = (state: State) => state.checkAvailability;
export const getReserveSlot = (state: State) => state.reserveSlot;
