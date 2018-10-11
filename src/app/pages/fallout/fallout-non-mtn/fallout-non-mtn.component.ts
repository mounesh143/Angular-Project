import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'com-fallout-non-mtn',
  templateUrl: './fallout-non-mtn.component.html',
  styleUrls: ['./fallout-non-mtn.component.scss']
})
export class FalloutNonMTNComponent implements OnInit {

  ASSETS_PATH: any = config.ASSETS;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gotoFeedback(){
    this._router.navigate(['feedback']);
  }
  gotoHome(){
    this._router.navigate(['recharge']);
  }
}
