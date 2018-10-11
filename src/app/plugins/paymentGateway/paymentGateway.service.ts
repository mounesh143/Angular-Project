import { Router } from '@angular/router';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { rechargeConfirmResponse_Array } from '../../config';

@Injectable()

export class PayementGatewayService {
    public rechargeConfirmResponse: any = rechargeConfirmResponse_Array;
    constructor(private _http: Http, private _router: Router) { }
    getPaymentRequest(payload: any) {
        const paymentURL: any = config.PLUGIN_URL + '/api/payment';
        // return this._http.post(paymentURL, payload).timeout(config.TIME_OUT)
        return this._http.post(paymentURL, payload)
        .toPromise()
        .then(resp => {
            console.log(resp);
            return resp.json();
        })
        .catch(err => Promise.reject(err));
    }
    getPaygateRedirect(payload: any) {
        const paymentURL: any = config.PLUGIN_URL + '/api/paygateRedirect';
        // return this._http.post(paymentURL, payload).timeout(config.TIME_OUT)
        return this._http.post(paymentURL, payload)
        .toPromise()
        .then(resp => {
            console.log(resp);
            return resp.json();
        })
        .catch(err => Promise.reject(err));
    }
}
