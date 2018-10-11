import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'com-fallout-purchase-limit',
  templateUrl: './fallout-purchase-limit.component.html',
  styleUrls: ['./fallout-purchase-limit.component.scss']
})
export class FalloutPurchaseLimitComponent implements OnInit {

  ASSETS_PATH: any = config.ASSETS;
  
  constructor(private _router : Router) { }

  ngOnInit() {
  }

  gotoHome(){
    console.log('routing called')
    this._router.navigate(['recharge']);
  }
}
