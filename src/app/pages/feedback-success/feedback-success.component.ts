import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'com-feedback-success',
  templateUrl: './feedback-success.component.html',
  styleUrls: ['./feedback-success.component.scss']
})
export class FeedbackSuccessComponent implements OnInit {

  ASSETS_PATH: any = config.ASSETS;
  header_text:any ='Thanks for your feedback. '
  constructor(private _router : Router) { }

  ngOnInit() {
  }

  gotoHome(){
    console.log('routing called')
    this._router.navigate(['recharge']);
  }
  gotoFeedback(){
    console.log('routing called')
    this._router.navigate(['feedback']);
  }
}
