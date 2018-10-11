import { Component, OnInit,Input } from '@angular/core';
import {  config } from '../../config';
import { BundleSelectionService } from '../../theme/services';

@Component({
  selector: 'com-airtime-bundles',
  templateUrl: './airtime-bundles.component.html',
  styleUrls: ['./airtime-bundles.component.scss', '../../theme/scss/_airtime-bundles.scss']
})
export class AirtimeBundlesComponent implements OnInit {
  op_curr: any = config.CURRENCY;
  min_input: any = config.MIN_AIRTIME_INPUT;
  airtime_input = '';
  @Input() mobile : any;
  constructor(private _bundleSelect: BundleSelectionService){}
  ngOnInit() {
    // this._bundleSelect.globalBundleEvent.subscribe( res => {
    //   if (res.com_type !== this._bundleSelect.AIRTIME) {
    //     console.log("res====="+res.com_type);
    //     this.airtime_input = '';
    //   }
    // });
  }
}
