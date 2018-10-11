// import { browser } from 'protractor';
import { HttpModule } from '@angular/http';
import { reducers } from '../../reducers';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RechargeConfirmationComponent } from './recharge-confirmation.component';
import { By } from '@angular/platform-browser';

// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
// import { EmailForm } from '../../utils/interface';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { config } from '../../config';
// import { format } from '../../utils/formatter';
import { StoreService } from '../../plugins/msisdn-store';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayementGatewayService } from '../../plugins/paymentGateway';
import { ThemeModule } from '../../theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { CommonService } from '../../theme/services/common/common.service';
import { AngularCDRService } from '../../plugins/angularCDR/angularCDR.service';
import { HeaderBackService } from '../../theme/services/header-back/header-back.service';
import { Location } from '@angular/common';
import { SavePDFService } from '../../plugins/savepdf';
// import {ModalModule} from "ng2-bootstrap";

// import reducers from 'reducers'
xdescribe('RechargeConfirmationComponent', () => {
  let component: RechargeConfirmationComponent;
  let fixture: ComponentFixture<RechargeConfirmationComponent>;
  let modalService: NgbModal;
  let location : Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeConfirmationComponent ],
      //imports for modules
      imports: [
        StoreModule.forRoot({}),
        ReactiveFormsModule, 
        FormsModule,
        ThemeModule,
        RouterTestingModule,
        NgbModule.forRoot(),
        HttpModule,
        // NgbModal
      ],
      //for services
      providers: [
        PayementGatewayService,
        StoreService,
        CommonService,
        AngularCDRService,
        HeaderBackService,
        SavePDFService,
        NgbModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show popup', () => {
    // component.openVerticallyCentered(null);
    expect(component.modalReference).toBe(null);
  });
  
  it('should show popup', () => {
    component.openVerticallyCentered(null);
    expect(component.modalReference).not.toBe(null);
  });
 


  //Tooltip scenario Starts
  it('should show tooltip on press', () => {
    const tooltipButton = fixture.debugElement.query(By.css('.tooltipButton'));
    tooltipButton.triggerEventHandler('click', null);
    const toolcontent = fixture.debugElement.query(By.css('.tooltipContent'));
    fixture.detectChanges();
    expect(toolcontent).toBeDefined();
    tooltipButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(toolcontent).toBe(null);
  });
  //Tooltip scenario Ends



  //Form Validation scenarios Starts
  it('Success case: Email Form input validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('abc@mtn.com');
    fixture.detectChanges();
    expect(control.valid).toBeTruthy();
  });
  it('Failure case: Email Form input validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('');
    fixture.detectChanges();
    expect(control.valid).toBeFalsy();
  });
  it('Failure case: Email Form input validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('abcmtn.com');
    fixture.detectChanges();
    expect(control.valid).toBeFalsy();
  });

  it('Success case: Email Form validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('abc@mtn.com');
    fixture.detectChanges();
    expect(component.emailForm.valid).toBeTruthy();
  });
  
  it('Failure case: Email Form validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('abcmtn.com');
    fixture.detectChanges();
    expect(component.emailForm.valid).toBeFalsy();
  });
  
  it('Failure case: Email Form validation', () => {
    const control = component.emailForm.get('email');
    control.setValue('');
    fixture.detectChanges();
    expect(component.emailForm.valid).toBeFalsy();
  });


  it('Success case: Form submit on API call', () => {
    const control = component.payForm.get('pay');
    control.setValue('sdhshfjs33434');
    fixture.detectChanges();
    expect(control.valid).toBeTruthy();
  });
  it('Failure case: Form submit on API call', () => {
    const control = component.payForm.get('pay');
    control.setValue('');
    fixture.detectChanges();
    expect(control.valid).toBeFalsy();
  });

  it('Success case: Pay Form validation', () => {
    const control = component.payForm.get('pay');
    control.setValue('sdhshfjs33434');
    fixture.detectChanges();
    expect(component.payForm.valid).toBeTruthy();
  });
  it('Failure case: Pay Form validation', () => {
    const control = component.payForm.get('pay');
    control.setValue('');
    fixture.detectChanges();
    expect(component.payForm.valid).toBeFalsy();
  });



  //Services scenarios Start
  it('call ngSubmit on button click', () => {
    spyOn(component, 'agreeTnC');
    fixture.debugElement.query(By.css('.buttonAgree')).triggerEventHandler('agreeTnC', component.emailForm);
    fixture.detectChanges();
    expect(component.agreeTnC).toHaveBeenCalled();
  });

  it('call payementGatewayService on ngSubmit of form', () => {
    const payementGatewayService = TestBed.get(PayementGatewayService);
    const spy = spyOn(payementGatewayService, 'getPaymentRequest').and.returnValue(Promise.resolve());
    component.agreeTnC(component.emailForm);
    expect(spy).toHaveBeenCalled();
  });
  //Services scenarios End

  //Individual Value Change Starts
  it('memberMSISDN change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.memberMSISDN).toBe(768856789);
  });
  it('header_text change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.header_text).toBe('Confirm your recharge for ' + component.memberMSISDN);
  });
  it('bundle_ID change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bundleID).toBe('abc123');
  });
  it('total change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.total).toBe(149);
  });
  it('Total_Value change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.Total_Value).toBe('149.00');
  });
  it('vat change in value', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.vat).toBe('11.92');
  });

});

