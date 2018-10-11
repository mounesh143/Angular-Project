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
export class HomeService {

  public validateCard: any = {};
  constructor(private _http: Http, private _router: Router, private _store: Store<fromRoot.State>) { }
  responsebundlejson: any = {};
  getAPIDetails(msisdn: string, role: string) {
    const loginDetailsURL = config.PLUGIN_URL + '/' + role + '/api/login';
    const payload = {
      msisdn: msisdn,
      role : role
    };
 
  let headers: Headers = new Headers();
//  headers.append("Authorization", shajs('sha256').update(config.AUTH_KEY).digest('hex'));
//  headers.append("Content-Type", "application/json");
    //return this._http.post(loginDetailsURL, payload).timeout(config.TIME_OUT)
    //return this._http.post(loginDetailsURL, payload).timeout(config.TIME_OUT)
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

  getBundleObjInit() {
   const responsebundlejson = [
    {
      "bundleType": "Data",
      "bundleClicked": "false",
      "results": []
    },{
      "bundleType": "SMS",
      "bundleClicked": "false",
      "results": []
    },{
      "bundleType": "Airtime",
      "bundleClicked": "false",
      "results": []
    }
   ];
   return responsebundlejson;
  }
  getBundleDetails() {
    let response = { 
      "class": "class za.co.mtn.store.service.v1.bean.MTNVasDataResponseBean",
      "status_code": 0,
      "status_message": "Transaction processed successfully.  Thank You.",
      "support_message": "Success",
      "transaction_id": "123",
      "vas": 
       [ { "bundletype": "Data",
           "class": "class za.co.mtn.store.service.v1.bean.MTNVasDataBean",
           "vasRechargeInfo": [{
          "all_platforms": null,
          "bundle_category": "Data",
          "bundle_description": "VariableValueVoucherData",
          "chargeable": "N",
          "class": "class za.co.mtn.store.service.v1.bean.MTNVasRechargeDataInfoBean",
          "cost": "650.0",
          "customer_facing_name": "10 GB DATA",
          "free_giveback_value": null,
          "image_url": "None",
          "me2u_allowed": "N",
          "once_off_vas_code": "DATA10G",
          "period": "1 Month",
          "recurance": "onceoff ",
          "recurring_vas_code": null,
          "shareable": "N",
          "value": "10MB"
        }, {
          "all_platforms": null,
          "bundle_category": "Data",
          "bundle_description": "VariableValueVoucherData",
          "chargeable": "N",
          "class": "class za.co.mtn.store.service.v1.bean.MTNVasRechargeDataInfoBean",
          "cost": "3999.0",
          "customer_facing_name": "100 GB DATA",
          "free_giveback_value": null,
          "image_url": "None",
          "me2u_allowed": "N",
          "once_off_vas_code": "DATA100G",
          "period": "1 Month",
          "recurance": "onceoff ",
          "recurring_vas_code": null,
          "shareable": "N",
          "value": "100GB"
        },{
          "all_platforms": null,
          "bundle_category": "Data",
          "bundle_description": "VariableValueVoucherData",
          "chargeable": "N",
          "class": "class za.co.mtn.store.service.v1.bean.MTNVasRechargeDataInfoBean",
          "cost": "15.0",
          "customer_facing_name": "MTN One Week (Weekly) 100MB",
          "free_giveback_value": null,
          "image_url": "None",
          "me2u_allowed": "N",
          "once_off_vas_code": "WDATA100MB",
          "period": "1 Week",
          "recurance": "onceoff ",
          "recurring_vas_code": null,
          "shareable": "N",
          "value": "100MB"
        },{
          "all_platforms": null,
          "bundle_category": "Data",
          "bundle_description": "VariableValueVoucherData",
          "chargeable": "N",
          "class": "class za.co.mtn.store.service.v1.bean.MTNVasRechargeDataInfoBean",
          "cost": "77.0",
          "customer_facing_name": "MTN One Week (Weekly) 100MB",
          "free_giveback_value": null,
          "image_url": "None",
          "me2u_allowed": "N",
          "once_off_vas_code": "WDATA100MB",
          "period": "1 Week",
          "recurance": "onceoff ",
          "recurring_vas_code": null,
          "shareable": "N",
          "value": "Unlimited"
        }] },
         { "bundletype": "SMS",
           "class": "class za.co.mtn.store.service.v1.bean.MTNVasDataBean",
           "vasRechargeInfo": [ {
          "all_platforms": null,
          "bundle_category": "SMS",
          "bundle_description": "VariableValueVoucherSms",
          "chargeable": "N",
          "class": "class za.co.mtn.store.service.v1.bean.MTNVasRechargeDataInfoBean",
          "cost": "30.0",
          "customer_facing_name": "SMS 100",
          "free_giveback_value": null,
          "image_url": "None",
          "me2u_allowed": "N",
          "once_off_vas_code": "SMS100",
          "period": "1 Month",
          "recurance": "onceoff ",
          "recurring_vas_code": null,
          "shareable": "N",
          "value": "100"
        } ] } ] 
    };
    if(response.status_code === 0)
    {
      if(response.vas){
        this.responsebundlejson = this.getBundleObjInit();
        for (var i = 0; i < response.vas.length; i++) {
          if(response.vas[i].bundletype == "Data")
          {
            let databundleresponse = response.vas[i].vasRechargeInfo;
            for(var j = 0; j < databundleresponse.length; j++){
              let desc = "";
              let subdesc = "";
              let value = databundleresponse[j].value;
              let unit = "";
              let unitvalue = "";
              if(databundleresponse[j].value!="Unlimited")
              {
                value = databundleresponse[j].value.slice(0,databundleresponse[j].value.length-2);
                unit = databundleresponse[j].value.slice(-2);
              }
              if(validity[databundleresponse[j].period])
              {
                desc = validity[databundleresponse[j].period];
              }else{
                desc = validitytext;
                subdesc = "pm * " + databundleresponse[j].period;
              }
              let newdatabundle = {
                "period": databundleresponse[j].period,
                "name": unit,
                "desc": desc,
                "subdesc": subdesc,
                "value": value,
                "cost": databundleresponse[j].cost,
                "color": "yellow",
                "special": false,
                "check": false,
                "lastclick": false
              };
              console.log("desc===="+validity['1 Month']);
              console.log("resp======="+JSON.stringify(this.responsebundlejson[0].results.length));
              if(this.responsebundlejson[0].results.length <= 0)
              {
                let newdata = { 
                  "bundleSubType" : databundleresponse[j].period,
                  "subresults" : [ newdatabundle ]
                }
                this.responsebundlejson[0].results.push(newdata);
                console.log("resp==first====="+JSON.stringify(this.responsebundlejson[0].results.length));
                //console.log("resp======="+JSON.stringify(this.responsebundlejson));
              }else{
                let previous_flag = false;
                for(var k=0; k< this.responsebundlejson[0].results.length; k++)
                {
                  console.log("resp==third==111==="+JSON.stringify(this.responsebundlejson[0].results[k].bundleSubType));
                  console.log("resp==third===222=="+JSON.stringify(databundleresponse[j].period));
                  if(this.responsebundlejson[0].results[k].bundleSubType === databundleresponse[j].period){
                    console.log("resp==second====="+JSON.stringify(this.responsebundlejson[0].results.length));
                    this.responsebundlejson[0].results[k].subresults.push(newdatabundle);
                    previous_flag = true;
                    break;
                  }
                }
                if(previous_flag === false)
                {
                  console.log("resp==third====="+JSON.stringify(this.responsebundlejson[0].results.length));
                    let newdata = { 
                      "bundleSubType" : databundleresponse[j].period,
                      "subresults" : [ newdatabundle ]
                    }
                    this.responsebundlejson[0].results.push(newdata);
                }
              }
            }
          }else if(response.vas[i].bundletype == "SMS"){
            if(response.vas[i].vasRechargeInfo)
            {
              let smsbundleresponse = response.vas[i].vasRechargeInfo;
              let desc = "";
              let subdesc = "";
              for(var j = 0; j < smsbundleresponse.length; j++){
                let newsmsbundle = {
                  "period": smsbundleresponse[j].period,
                  "name": "SMS's",
                  "desc": desc,
                  "subdesc": subdesc,
                  "value": smsbundleresponse[j].value,
                  "cost": smsbundleresponse[j].cost,
                  "color": "yellow",
                  "special": false,
                  "check": false,
                  "lastclick": false
                };
                this.responsebundlejson[1].results.push(newsmsbundle);
              }
            } 
          }
        }
        //return Promise.resolve(this.responsebundlejson);
        return this.responsebundlejson;
      }
    }
  }

  getValidateBundleDetails(msisdn: string,vas_code: string) {

      // const getValidateURL = config.PLUGIN_URL  + '/api/getValidateCardDetails';
      // const payload = {
      //     msisdn: msisdn,
      //     vas_code: vas_code,
      // };
      // //return Promise.resolve(this.updatemember_Array);
      // return this._http.post(getValidateURL, payload).timeout(config.TIME_OUT)
      // .toPromise()
      // .then((res) => {
      //     const response = res.json();
      //     this.validateCard = response;
      //     return Promise.resolve(this.validateCard);
      // }).catch((err) => {
      //     console.log('err-' + err);
      //     err['status'] = '1';
      //     return Promise.reject(err);
      // });
      let response = { 
          "transaction_id": "12345",
          "status_code": 1,
          "status_message": "success",
          "support_message": "success",
          "ecommerce_reference_num":"123876",
          "class": "abc"
      }
      return Promise.resolve(response);
  }
}