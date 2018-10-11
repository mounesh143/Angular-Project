import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBundlesComponent } from './data-bundles.component';

import { config } from '../../config';
import { StoreModule, ReducerManager } from '@ngrx/store';

// import { By } from '../../../../../node_modules/@angular/platform-browser';
import { ThemeModule } from '../../theme/theme.module';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { reducers } from '../../reducers';
// import { By } from '../../../../node_modules/@angular/platform-browser/src/platform-browser';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('DataBundlesComponent', () => {
  let component: DataBundlesComponent;
  let fixture: ComponentFixture<DataBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBundlesComponent ],
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
    fixture = TestBed.createComponent(DataBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call currentTab on clicking bundle card', () => {
    spyOn(component, 'changeTab');
    component.bundleList = config.bunData;
    
    fixture.detectChanges(); 
   
    component.ngOnInit();
    fixture.detectChanges();     
    let tab = fixture.debugElement;
    
    tab.query(By.css('.normal-tab')).triggerEventHandler('click', null);
       
    expect(component.changeTab).toHaveBeenCalled();
  });

  it('should change currentTab value on calling changeTab', () => {
    
    component.bundleList = config.bunData;
    component.ngOnInit();
    fixture.detectChanges();     
    // let tab = fixture.debugElement.query(By.css('.normal-tab')).triggerEventHandler('click', null);
    component.changeTab(0);    
    expect(component.currentTab).toBe(0);
    expect(component.lastClickedTab).toBe(0);
  });

  it('should call select_bundle on clicking Tab items', () => {
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
    expect(component.databundleArray.subresults[0].check).toBe(true);
    expect(component.lastClicked).toBe(0);
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
});


