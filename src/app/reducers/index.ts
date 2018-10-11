import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromLayout from './layout';
import * as fromSlimloader from './slimloader';
import * as fromProduct from './product';
import * as fromAccount from './account';
import * as fromFooter from './footer';
import { loadState } from '../core/app.state';

export interface State {
  layout: fromLayout.State;
  slimloader: fromSlimloader.State;
  product: fromProduct.State;
  account: fromAccount.State;
  footer: fromFooter.State;
}

export const reducers = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
  slimloader: fromSlimloader.reducer,
  product: fromProduct.reducer,
  account: fromAccount.reducer,
  footer: fromFooter.reducer
};

const localStorageSync = (reducer: any) => {
  return function(state, action: any) {
    if (action.type === '@ngrx/store/init') {
      state = Object.assign({}, state, loadState());
    }
    const nextState = reducer(state, action);
    return nextState;
  };
};

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, localStorageSync, combineReducers)(reducers);
const developmentReducer: ActionReducer<State> = compose(localStorageSync, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = compose(localStorageSync, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Layout Reducer
 */

export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

/**
 * Slimloader Reducer
 */

export const getSlimloaderState = (state: State) => state.slimloader;

export const getShowSlimloader = createSelector(getSlimloaderState, fromSlimloader.getShowSlimloader);

/**
 * Product Reducer
 */
export const getProductState = (state: State) => state.product;

export const getProductName = createSelector(getProductState, fromProduct.getProductName);
export const getCheckAvailability = createSelector(getProductState, fromProduct.getCheckAvailability);
export const getReserveSlot = createSelector(getProductState, fromProduct.getReserveSlot);

/**
 * Account Details
 */
export const getAccountState = (state: State) => state.account;

export const getAccountMSISDN = createSelector(getAccountState, fromAccount.getAccountMSISDN);
export const getLoginStatus = createSelector(getAccountState, fromAccount.getLoginStatus);
export const getCustomerDetails = createSelector(getAccountState, fromAccount.getCustomerDetails);


/** Footer  **/
export const getFooterState = (state: State) => state.footer;

export const showFooter = createSelector(getFooterState, fromFooter.showFooter);
