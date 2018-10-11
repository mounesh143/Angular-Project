import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StoreService {
  public msisdn_store = 0;
  public bundleID_store = '';
  constructor(private router: Router) {
    // this.msisdn_store = 0;
    this.msisdn_store = 768856789;
    // this.bundleID = '';
    this.bundleID_store = 'abc123';
  }

  setMsidnData(data: number) {
    this.msisdn_store = data;
  }
  getMsidnData() {
    return this.msisdn_store;
  }

  setBundleData(data: string) {
    this.bundleID_store = data;
  }
  getBundleData() {
    return this.bundleID_store;
  }
}