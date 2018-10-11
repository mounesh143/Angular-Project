import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'com-fallout-feedback-error',
  templateUrl: './fallout-feedback-error.component.html',
  styleUrls: ['./fallout-feedback-error.component.scss']
})
export class FalloutFeedbackErrorComponent implements OnInit {

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
