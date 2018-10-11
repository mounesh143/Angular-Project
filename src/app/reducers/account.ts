import * as account from '../actions/account';
import { UserDetails } from '../utils/interface';

export interface State {
  msisdn: string;
  isLoggedIn: boolean;
  customer: UserDetails;
};

export const intialState: State = {
  msisdn: '',
  isLoggedIn: false,
  customer : {
      msisdn : '',
      name: '',
      role: '',
      sub_type: '',
      address: '',
      email: '',
      secondary_contact: '',
      account_no: ''
}
};

export function reducer(state = intialState, action: account.Actions): State {
  switch (action.type) {
    case account.MSISDN: {
      return {
        msisdn: action.payload,
        isLoggedIn: state.isLoggedIn,
        customer: state.customer
      };
    }
    case account.AUTHORIZED: {
      return {
        msisdn: state.msisdn,
        isLoggedIn: true,
        customer: state.customer
      };
    }
    case account.UNAUTHORIZED: {
      return {
        msisdn: state.msisdn,
        isLoggedIn: false,
        customer: state.customer
      };
    }
    case account.DETAILS: {
      return {
        msisdn: state.msisdn,
        isLoggedIn: state.isLoggedIn,
        customer: Object.assign({}, state.customer, action.payload)
      }
    }
    default: return state;
  }
}

export const getAccountMSISDN = (state: State) => state.msisdn;
export const getLoginStatus = (state: State) => state.isLoggedIn;
export const getCustomerDetails = (state: State) => state.customer;
