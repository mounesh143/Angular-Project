import { Injectable } from '@angular/core';
import { config } from '../config';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as account from '../../actions/account';
import * as fromRoot from '../../reducers';
import * as shajs from 'sha.js';
import { CustomerDetailsAction } from '../../actions/product';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private _http: Http, private _router: Router, private _store: Store<fromRoot.State>) { }

  getAPIDetails(msisdn: string, role: string) {
    const loginDetailsURL = config.PLUGIN_URL + '/' + role + '/api/login';
    const payload = {
      msisdn: msisdn,
      role : role
    };
 
  let headers: Headers = new Headers();
//  headers.append("Authorization", shajs('sha256').update(config.AUTH_KEY).digest('hex'));
//  headers.append("Content-Type", "application/json");
    // return this._http.post(loginDetailsURL, payload).timeout(config.TIME_OUT)
    return this._http.post(loginDetailsURL, payload)
  .toPromise()
  .then(resp => {
    return resp.json();
  })
  .catch(function(err) {
    console.log('err.status1---' + JSON.stringify(err));
    if (err.status == 403 || err.status == '403') {
      console.log('err.status2---' + err.status);
      this.router.navigate(['agent', 'fixedlte', 'dashboard']).then((nav) => {
        console.log('Redirection success');
      }, err => {
        console.log('Redirection failure---');
      });
    }
    Promise.reject(err);
  });
 }
  getLoginDetails(msisdn: string, role: string) {
    const payload = {
      msisdn: msisdn
    };
    let store_cust_obj = null;
    return this.getAPIDetails(msisdn, role)
    .then(
        response => {
        if (response.Header.SVC_ERR_NR === '200') {
          this._store.select(fromRoot.getCustomerDetails)
          .subscribe(
            val => {
              store_cust_obj = val;
              store_cust_obj.sub_type = response.subattr.SUB_TYPE;
              store_cust_obj.role = role;
              store_cust_obj.msisdn = msisdn;
            }
          );
          this._store.dispatch(new account.StoreDetailsAction(store_cust_obj));
          return Promise.resolve(true);
        } else {
          return Promise.reject(false);
        }
      }
    ).catch(err => {
      Promise.reject(err);
    });
  }
}