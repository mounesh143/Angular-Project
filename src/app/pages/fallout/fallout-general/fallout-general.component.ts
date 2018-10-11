import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'com-fallout-general',
  templateUrl: './fallout-general.component.html',
  styleUrls: ['./fallout-general.component.scss']
})
export class FalloutGeneralComponent implements OnInit {

  ASSETS_PATH: any = config.ASSETS;
  
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    console.log('routing called')
    this._router.navigate(['recharge']);
  }
}
