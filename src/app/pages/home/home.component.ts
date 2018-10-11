import { Component, OnInit } from '@angular/core';
import { config } from '../../config';
import { CommonService,BundleSelectionService } from '../../theme/services';
import { StoreService } from '../../plugins/datastore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../plugins/home';
import { BundleErrorComponent } from './bundle-error/bundle-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as loader from '../../actions/slimloader';



@Component({
  selector: 'com-login',
  templateUrl: './home.component.html',
  styleUrls: ['../../theme/scss/_home.scss', '../../theme/scss/_card.scss', './home.component.scss'],
})
export class HomeComponent implements OnInit {
  bundleArray = config.bunCon;
  bundleHelpArray = config.bunHelp;
  lastClick: any = -1;
  mobId: any;
  hide_icons: any = false;
  mobile_screen: any = false;
  bundlelist_details: any;
  isBundleSelected: any;
  help_icon = false;
  finalselectedbundle: any;
  header_text:any = "What would you like to recharge?";
  msisdnForm: FormGroup;
  tabvalue: any;
  routeValue: any;
  footerDiv = false;
  back_button = true;
  public ASSETS_PATH: string = config.ASSETS;
  constructor(private modalService: NgbModal,private _router:Router,private _storedata: StoreService,private _store: Store<fromRoot.State>,private _common: CommonService,private _home: HomeService,private fb: FormBuilder,private _bundleSelect: BundleSelectionService) {}
  ngOnInit() {
    this.routeValue = this._router.url.split('/')[2];
    console.log("routeValue===="+this.routeValue);
    if(this.routeValue!=undefined){
      if(this.routeValue != "help")
      {
        if(this.routeValue === "data")
        {
          this.bundleArray.results[0].click = true;
          this.lastClick = 0;
          this.footerDiv = true;
          this.mobId = 0;
        }else if(this.routeValue === "airtime")
        {
          this.bundleArray.results[1].click = true;
          this.lastClick = 1;
          this.footerDiv = true;
          this.mobId = 1;
        }else if(this.routeValue === "sms")
        {
          this.bundleArray.results[2].click = true;
          this.lastClick = 2;
          this.footerDiv = true;
          this.mobId = 2;
        }
        if (this._common.ifMobile()) {
          this.hide_icons = true;
          this.mobile_screen = true;
          console.log('Screen width111111',this.header_text);
          this.header_text = this.bundleArray.results[this.mobId].desctext;
          console.log('Screen width', window.innerWidth, ' ', this.mobId);
        }
      }else
      {
        console.log("this==="+this.routeValue);
        this.help_icon = true;
      }
    }
    this.msisdnForm = this.fb.group({
      msisdn: ['', [Validators.required, Validators.minLength(config.MIN_MSISDN_LENGTH), Validators.maxLength(config.MSISDN_LENGTH)]]
    });

    //bundle bundleListService
    // const bundlePromise = this._home.getBundleDetails('944')
    // .then(response => {
    //   this.bundlelist_details = response;
    //   console.log("bundlelist_details==1==="+JSON.stringify(this.bundlelist_details));
    // })
    // .catch(err => {
    //   this.bundlelist_details = err;
    // });
    this.bundlelist_details = this._home.getBundleDetails();
    console.log("bundlelist_details==1==="+JSON.stringify(this.bundlelist_details));
    this._bundleSelect.globalBundleEvent.subscribe( res => {
      console.log('Final Bundle - ' + JSON.stringify(res));
       this.finalselectedbundle = res;
       document.getElementById('footerscroll').scrollIntoView();
    });
    this._bundleSelect.bundleFlagEvent.subscribe(res => {
      this.isBundleSelected = res;
      let delay;
      if(res.vas_code) {
        delay = 800;
      } else {
        delay = 2000;
      }
      if (this.isBundleSelected) {
        setTimeout(() => {
          this._bundleSelect.setInputFocus();
          }, delay);
      } else {
        this._bundleSelect.unSetInputFocus();
      }
    });
  }
  ngOnChanges() {
    this.routeValue = this._router.url.split('/')[2];
    console.log("routeValue===="+this.routeValue);
    if(this.routeValue!=undefined){
      if(this.routeValue != "help")
      {
        if(this.routeValue === "data")
        {
          this.bundleArray.results[0].click = true;
          this.lastClick = 0;
          this.footerDiv = true;
          this.mobId = 0;
        }else if(this.routeValue === "airtime")
        {
          this.bundleArray.results[1].click = true;
          this.lastClick = 1;
          this.footerDiv = true;
          this.mobId = 1;
        }else if(this.routeValue === "sms")
        {
          this.bundleArray.results[2].click = true;
          this.lastClick = 2;
          this.footerDiv = true;
          this.mobId = 2;
        }
        if (this._common.ifMobile()) {
          this.hide_icons = true;
          this.mobile_screen = true;
          console.log('Screen width111111',this.header_text);
          this.header_text = this.bundleArray.results[this.mobId].desctext;
          console.log('Screen width', window.innerWidth, ' ', this.mobId);
        }
      }else
      {
        console.log("this==="+this.routeValue);
        //this.help_icon = true;
      }
    }
    
  }
  onSubmit() {

  }
  
  toggleIcon(idx: any, disable:  any) {
    this.footerDiv = true;
    if (!disable) {
      if(this.bundlelist_details && this.bundlelist_details.results && this.bundlelist_details.results.length > 0)
      {
        for(var i=0;i<this.bundlelist_details.results.length;i++)
        {
          this.bundlelist_details.results[i].bundleClicked = "false";
        }
      }
      if (this.lastClick !== -1) {
        this.bundleArray.results[this.lastClick].click = false;
      }
      this.bundleArray.results[idx].click = true;
      this.lastClick = idx;
      this._router.navigate(['recharge', this.bundleArray.results[idx].icon]);
      console.log('Screen width', this._common.ifMobile());
      if (this._common.ifMobile()) {
         this.hide_icons = true;
         this.mobile_screen = true;
         console.log('Screen width111111',this.header_text);
         this.header_text = this.bundleArray.results[idx].desctext;
         console.log('Screen width', window.innerWidth, ' ', idx);
      }
      console.log(this.bundleArray.results[idx].icon)
      console.log(['recharge', this.bundleArray.results[idx].icon])
    }
  }
  helpIcon(){
    this.help_icon = true;
    this.ngOnChanges();
  }

  helpBackIcon(){
    this.help_icon = false;
    //this.ngOnChanges();
  }

  footerEmitter(msisdn) {
    console.log('val---' + msisdn);
    console.log("form===="+ this.finalselectedbundle);
    //const msisdn = format.msisdn(value.msisdn.toString());
    //to be fetched from a selected bundle
    let order_no = '';
    let amount = '39.0';
    let vas_code = 'DATA10OFF';
    let facing_name = 'Data Bundle 10';
    let chargeable = 'no';

    this._store.dispatch(new loader.StartSlimloaderAction);
    this._home.getValidateBundleDetails(msisdn,vas_code)
    .then(resp => {
        this._store.dispatch(new loader.StopSlimloaderAction);
        if(resp.status_code === 0){
            this._storedata.setMsidnData(msisdn);
            this._storedata.setAmountData(amount);
            this._storedata.setVasCodeData(vas_code);
            this._storedata.setFacingNameData(facing_name);
            this._storedata.setChargeableData(chargeable);
            order_no = resp.ecommerce_reference_num;
            this._storedata.setOrderNoData(order_no);
            this._router.navigate(['recharge','confirmation']).then( nav => {
            // this._cdr.writeCDR(this.startTime, 'Myaccount', 'Dashboard','200','Dashboard Redirection Success');
            }, err => {
              //this._cdr.writeCDR(this.startTime, 'Myaccount','Dashboard','1', 'Dashboard Redirection Failure');
              //this.login_error = 'Please try again after sometime';
              //this.msisdnForm.reset();
            });
        }else{
          const modalReference = this.modalService.open(BundleErrorComponent, { centered: true });
          modalReference.componentInstance.name = 'World';
        }
    })
    .catch(err => {
      //this._cdr.writeCDR(this.startTime, this.category,'Invalid attempt','1','MSISDN Validation Failure');
      this._store.dispatch(new loader.StopSlimloaderAction);
      //this.login_error = 'Please enter valid MSISDN';
      //this.msisdnForm.reset();
    });
  }

  helpEmitter(navigate_name){
    console.log('val---' + navigate_name);
    this.help_icon = false;
    this._router.navigate(['recharge', navigate_name]).then( nav => {
      console.log("======inside console====");
      this.ngOnChanges();
    });

    //this._router.navigate(['recharge', navigate_name], ()=> {
      //this.ngOnChanges();
      console.log("======inside console====");
   // });
    //console.log("next line=====");
  }

  backEmitter(){
    this.routeValue = this._router.url.split('/')[2];
    if(this.routeValue!=undefined)
    {
      this._router.navigate(['recharge']).then( nav => {
        if (this.lastClick !== -1) {
          this.bundleArray.results[this.lastClick].click = false;
        }
        this.lastClick = -1;
        this.help_icon = false;
        this.footerDiv = false;
        if (this._common.ifMobile()) {
          this.hide_icons = false;
       }
      }); 
   }
   //to go back to MTN URL
   else{
    // this._router.navigate(['recharge','help']).then( nav => {
    // });
   }
  }
  
  onLoadMdNav(selectedData){
    
  }
}


