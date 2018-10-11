import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../../config';
import { BundleForm } from '../../../utils/interface/bundle';
import { format } from '../../../utils/formatter';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as loader from '../../../actions/slimloader';
import { HomeService } from '../../../plugins/home';
import { Router } from '@angular/router';
import { BundleSelectionService } from '../../services';

@Component({
  selector: 'com-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../scss/_footer.scss', './footer.component.scss'],
})
export class FooterComponent implements OnInit {
  bundleArray = config.bunCon;
  lastClick: any = -1;
  hide_icons: any = false;
  mobile_screen: any = false;
  msisdnForm: FormGroup;
  @Input() bundleSelected;
  @Output() msisdn_val = new EventEmitter();
  public ASSETS_PATH: string = config.ASSETS;
  constructor(private fb: FormBuilder,private _store: Store<fromRoot.State>,
    private _home: HomeService, private _router: Router, private _bundleSelect: BundleSelectionService) {}
  ngOnInit() {
    this.msisdnForm = this.fb.group({
      'msisdn': ['0832227009', [Validators.required, Validators.minLength(config.MIN_MSISDN_LENGTH), Validators.maxLength(config.MSISDN_LENGTH)]]
    });
    // this._bundleSelect.bundleFlagEvent.subscribe(res => {
    //   console.log('Got flag from bundle service - ' + res);
    //   this.bundleSelected = res;
    // });
  }
  validateBundle({value, valid}: {value: BundleForm, valid: boolean}) {
    if (this.msisdnForm.valid && this.bundleSelected) {
      this.msisdn_val.emit(value.msisdn.toString());
    }
  }
}


