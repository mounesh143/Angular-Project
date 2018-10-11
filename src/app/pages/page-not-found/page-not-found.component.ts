import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../config';
import { PayementGatewayService } from '../../plugins/paymentGateway';
import { Router } from '@angular/router';

@Component({
  selector: 'com-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss', '../../theme/scss/_bundle-icon.scss'],
})
export class PageNotFoundComponent implements OnInit {
  paymentForm: FormGroup;
  paygateURL: any;
  constructor(private fb: FormBuilder, private _payment: PayementGatewayService, private _router: Router) {
  }
  ngOnInit() {
    // document.getElementById('name').value = '1212122121';
    // document.getElementById('myform').submit();
    // this.paygateURL = location.protocol + '//' + location.hostname + ':' + (location.port ? location.port : '') + '/app/api/paygateRedirect';
    this.paygateURL = location.protocol + '//' + '10.206.3.39' + ':' + (location.port ? '4232' :  '') + '/app/api/paygateRedirect';
    this.paymentForm = this.fb.group({
      msisdn: ['', [Validators.required, Validators.minLength(config.MIN_MSISDN_LENGTH), Validators.maxLength(config.MSISDN_LENGTH)]],
      amount: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    console.log('URL', location.protocol + '//' + location.hostname + ':' + (location.port ? location.port : ''));
  }
  onSubmit() {

  }
}
