import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StoreService {
  public msisdn_store = 0;
  public vasCodeID_store = '';
  public orderNumber_store = '';
  public amount_store = '';
  public facingName_store = '';
  public chargeable_store = '';
  public email_store = '';

  constructor(private router: Router) {
    this.msisdn_store = 0;
    this.vasCodeID_store = '';
    this.orderNumber_store = '';
    this.amount_store = '';
    this.facingName_store = '';
    this.chargeable_store = '';
    this.email_store = '';
    // this.msisdn_store = 768856789;
    // this.vasCodeID_store = 'abc123';
  }

  //MSISDN Data
  setMsidnData(data: number) {
    this.msisdn_store = data;
  }
  getMsidnData() {
    return this.msisdn_store;
  }
  //VASCode Data
  setVasCodeData(data: string) {
    this.vasCodeID_store = data;
  }
  getVasCodeData() {
    return this.vasCodeID_store;
  }
  //Order number Data
  setOrderNoData(data: string) {
    this.orderNumber_store = data;
  }
  getOrderNoData() {
    return this.orderNumber_store;
  }
  //Amount Data
  setAmountData(data: string) {
    this.amount_store = data;
  }
  getAmountData() {
    return this.amount_store;
  }
  //Facing Data
  setFacingNameData(data: string) {
    this.facingName_store = data;
  }
  getFacingNameData() {
    return this.facingName_store;
  }
  //Chargeable Data
  setChargeableData(data: string) {
    this.chargeable_store = data;
  }
  getChargeableData() {
    return this.chargeable_store;
  }
  //Email Data
  setEmailData(data: string) {
    this.email_store = data;
  }
  getEmailData() {
    return this.email_store;
  }
}