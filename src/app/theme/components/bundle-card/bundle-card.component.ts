import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../config';
@Component({
  selector: 'com-bundle-card',
  templateUrl: './bundle-card.component.html',
  styleUrls: ['./bundle-card.component.scss', '../../scss/_bundle-card.scss'],
})
export class BundleCardComponent implements OnInit {
  @Input() size: any;
  @Input() unit: any;
  @Input() rate: any;
  @Input() y_desc: any;
  @Input() w_desc: any;
  @Input() special_check: any;
  @Input() check: any;
  @Input() color: any;
  currency: any = config.CURRENCY;
  special_icon: any = config.ASSETS + '/images/star-white.svg';
  select_icon: any = config.ASSETS + '/images/selected-bundle-desktop.svg';
  unselect_icon: any = config.ASSETS + '/images/unselected-bundle-desktop.svg';
  ngOnInit() {
    // this.size = '150';
    // this.unit = 'MB';
    // this.rate = '190';
    // this.y_desc = 'pm x 6 months';
    // this.w_desc = 'once-off payment';
    // this.check = false;
    //this.color = '#FFCB05';
    const rid = Math.random().toString(36);
    document.getElementById('bundle-main').id = rid;
    //document.getElementById(rid).style.backgroundColor = this.color;
  }
  // select_bundle() {
  //   this.check = !this.check;
  // }
}
