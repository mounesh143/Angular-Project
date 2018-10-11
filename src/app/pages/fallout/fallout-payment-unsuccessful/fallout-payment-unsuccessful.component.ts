import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'com-fallout-payment-unsuccessful',
  templateUrl: './fallout-payment-unsuccessful.component.html',
  styleUrls: ['./fallout-payment-unsuccessful.component.scss']
})
export class FalloutPaymentUnsuccessfulComponent implements OnInit {

  ASSETS_PATH: any = config.ASSETS;
  constructor(private _router : Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this._router.navigate(['recharge']);
  }
}
