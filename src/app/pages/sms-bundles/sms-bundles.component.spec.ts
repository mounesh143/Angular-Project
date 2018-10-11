import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSBundlesComponent } from './sms-bundles.component';

import { config } from '../../config';
import { StoreModule, ReducerManager } from '@ngrx/store';

// import { By } from '../../../../../node_modules/@angular/platform-browser';
import { ThemeModule } from '../../theme/theme.module';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { reducers } from '../../reducers';
// import { By } from '../../../../node_modules/@angular/platform-browser/src/platform-browser';
import { By } from '../../../../node_modules/@angular/platform-browser';


describe('SMSBundlesComponent', () => {
  let component: SMSBundlesComponent;
  let fixture: ComponentFixture<SMSBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMSBundlesComponent ],
      imports:[
        ThemeModule,       
        NgbModule.forRoot(),  
        // StoreModule.forRoot({}),
        StoreModule.forRoot(reducers),              
      ],    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call select_bundle on clicking bundle card', () => {
    spyOn(component, 'select_bundle');
    component.bundleList = config.bunData;
    
    fixture.detectChanges(); 
   
    component.ngOnInit();
    fixture.detectChanges();     
    let tab = fixture.debugElement;
    
    tab.query(By.css('.bundle-card-select')).triggerEventHandler('click', null);
       
    expect(component.select_bundle).toHaveBeenCalled();
  });

  it('should change checked value on calling select_bundle', () => {
    
    component.bundleList = config.bunData;
    component.ngOnInit();
    fixture.detectChanges();     
    // let tab = fixture.debugElement.query(By.css('.normal-tab')).triggerEventHandler('click', null);
    component.select_bundle(0);    
    // this.databundleArray.subresults[idx].check = true;
	  // this.lastClicked = idx;
    expect(component.smsbundleArray[0].check).toBe(true);
    expect(component.lastClicked).toBe(0);
  });

});


