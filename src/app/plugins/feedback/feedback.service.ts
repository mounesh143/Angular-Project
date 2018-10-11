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
import { validity,validitytext } from './config';

@Injectable()
export class FeedbackService {

  constructor(private _http: Http, private _router: Router, private _store: Store<fromRoot.State>) { }
  responsebundlejson: any = {};
  getAPIDetails(msisdn: string) {
    const feedbackDetailsURL = config.PLUGIN_URL + '/'  + 'api/getBackDetails';
    const payload = {
      msisdn: msisdn
    };
 
  let headers: Headers = new Headers();
  return this._http.post(feedbackDetailsURL, payload)
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

  getBackDetails() {
        let msisdn = "944";
        const feedbackDetailsURL = config.PLUGIN_URL + '/api/getBackDetails';
        const payload = {
            msisdn: msisdn
        };
        const headers: Headers = new Headers();
        headers.append('Authorization', shajs('sha256').update(config.AUTH_KEY).digest('hex'));
        headers.append('Content-Type', 'application/json');
        // return this._http.post(feedbackDetailsURL, payload).timeout(config.TIME_OUT)
        // .toPromise()
        // .then((res) => {
        //     console.log(' Response recieved ' + JSON.stringify(res.json()));
        //     return Promise.resolve(res.json());
        // })
        // .catch((err) => {
        //     return Promise.reject(err);
        // });
        return Promise.resolve("{'status_code':0}");
    }

  sendFeedback(rating, feedback, e_com_num) {
        // let msisdn = "944";
        // let ecommerce_reference_num : 'string';
        // let rating: "string";
        // let feedback : "string";
        const feedbackSendURL = config.PLUGIN_URL + '/api/feedback';
        const payload = {
            // msisdn: msisdn,
            ecommerce_reference_num : e_com_num,
            rating: rating,
            feedback: feedback
        };
        const headers: Headers = new Headers();
        headers.append('Authorization', shajs('sha256').update(config.AUTH_KEY).digest('hex'));
        headers.append('Content-Type', 'application/json');
        // return this._http.post(feedbackSendURL, payload).timeout(config.TIME_OUT)
        // .toPromise()
        // .then((res) => {
        //     console.log(' Response recieved ' + JSON.stringify(res.json()));
        //     return Promise.resolve(res.json());
        // })
        // .catch((err) => {
        //     return Promise.reject(err);
        // });
        return Promise.resolve("{'status_code':0}");
    }
}