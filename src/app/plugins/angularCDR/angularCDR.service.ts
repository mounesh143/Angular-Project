import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { config } from '../config';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as account from '../../actions/account';
import { Router } from '@angular/router';
@Injectable()

export class AngularCDRService {
   private InitRole: any;
  constructor(private http: Http, private _store: Store<fromRoot.State>, private router: Router) {
    this.InitRole = this.router.url.split('/')[1];
  }
  private createHeader(headers: Headers, role: any) {
    headers.append('Extras', btoa('test:' + role + ':agentName:NA:P:xxxxxx'));
  }
  private sendTowriteCDR(transStartTime, msisdn, sessionID, userName, role, subscriberType, activityCategory, subCategory
        , offerCode, amount, browserVersion, transEndTime) {
      const cdrLoggerURL = config.PLUGIN_URL + '/' + this.InitRole + '/api/angularCDR';
      const payload = {
      'transStartTime': transStartTime,
      'transEndTime': transEndTime,
      'node': 'active_node',
      'sessionID': sessionID,
      'userName': userName,
      'msisdn': msisdn,
      'subscriberType': subscriberType,
      'originIP': '',
      'agentName': '',
      'agentRole': role,
      'edrType': 'Multiline',
      'activityCategory': activityCategory,
      'subCategory': subCategory,
      'component': 'middleware',
      'input': 'json',
      'output': 'json',
      'offerCode': offerCode,
      'amount': amount,
      'statusCode': '200',
      'statusMessage': 'True',
      'field1': 'field1',
      'field2': 'field2',
      'field3': 'field3',
      'field4': 'field4',
      'field5': 'field5'
    };
    const headers = new Headers();
    this.createHeader(headers, role);
    // this.http.post(cdrLoggerURL, payload).timeout(config.TIME_OUT)
    // .toPromise()
    //   .then(resp => {
    //     return resp.json();
    //   })
    //   .catch(err => {
    //     Promise.reject(err);
    // });
  }
  writeCDR(startTime, category, subCategory) {
    let store_cust_obj = null;
    this._store.select(fromRoot.getCustomerDetails).subscribe( val => store_cust_obj = val );
    const browserVersion = this.getBrowserType();
    const sessionId = 'xxxxx';
    const username = store_cust_obj.msisdn;
    const subType = store_cust_obj.sub_type;
    const endTime = this.getTransactionTime(0);
    this.sendTowriteCDR(startTime, store_cust_obj.msisdn, sessionId, username,
      store_cust_obj.role, subType, category, subCategory, '', '', browserVersion, endTime);
  }
   getTransactionTime(offset) {
    if (!offset) {
      offset = 0;
    }
    const today = new Date();
    const date = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
    let dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = Number('0' + dd);
    }
    let hh = date.getHours();
    let MM = date.getMinutes();
    let ss = date.getSeconds();
    if (hh < 10) {
      hh = this.addZero(hh);
    }
    if (MM < 10) {
      MM = this.addZero(MM);
    }
    if (ss < 10) {
      ss = this.addZero(ss);
    }
    const finalDate = dd + '-' + mm + '-' + yyyy + ' ' + hh + ':' + MM + ':' + ss + '.' + date.getMilliseconds();
    return finalDate;
  }
  private addZero(i) {
    i = (i < 10) ? '0' + i : i;
    return i;
  }
  public getBrowserType() {
    let browserType = '';
    if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1 ) {
        browserType = 'Opera';
    } else if (navigator.userAgent.indexOf('Chrome') !== -1 ) {
      browserType = 'Chrome';
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      browserType = 'Safari';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1 ) {
      browserType = 'Firefox';
    } else if ((navigator.userAgent.indexOf('MSIE') !== -1 )) {
      browserType = 'IE';
    } else {
      browserType = 'unknown';
    }
    return browserType;
  }

}
