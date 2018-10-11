// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';
// import { ThemeModule } from '../../theme/theme.module';
// import { DataBundlesComponent } from '../data-bundles/data-bundles.component';
// import { SMSBundlesComponent } from '../sms-bundles/sms-bundles.component';
// import { AirtimeBundlesComponent } from '../airtime-bundles/airtime-bundles.component';
// import { HomeModule } from './home.module';
// import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
// import { StoreService } from '../../plugins/datastore';
// import { CommonService } from '../../theme/services/common';
// import { HomeService } from '../../plugins/home';
// import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
// import { StoreModule } from '../../../../node_modules/@ngrx/store';
// import { reducers } from '../../reducers';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AngularCDRService } from '../../plugins/angularCDR';
// import { HeaderBackService } from '../../theme/services/header-back';
// import { By } from '../../../../node_modules/@angular/platform-browser';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       // declarations: [ HomeComponent ],
//       imports: [
//         ThemeModule,
//         HomeModule,
//         // DataBundlesComponent,
//         // SMSBundlesComponent,
//         // AirtimeBundlesComponent,
//         ReactiveFormsModule,
//         FormsModule,
//         RouterTestingModule,
//         StoreModule.forRoot({}),

//       ],
//       providers:[
//          NgbModal, 
//          StoreService,
//          CommonService,
//           HomeService,
//           AngularCDRService,
//           HeaderBackService
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('bundle icons validation', () => {
//     component.ngOnInit()
//     fixture.detectChanges();
//     expect(component.lastClick).toBe(-1);
//   });

//   it('should call toggle-icon on clicking Bundle Icon', () => {
//     spyOn(component, 'toggleIcon');
//     fixture.debugElement.query(By.css('.bundle-icon-click')).triggerEventHandler('click', null);
//     fixture.detectChanges();    
//     expect(component.toggleIcon).toHaveBeenCalled();
//   });
  
//   it('should change last click on calling toggle icon : Data Bundles', () => {
//     component.toggleIcon(0, false);
//     fixture.detectChanges();
//     expect(component.bundleArray.results[component.lastClick].click).toBe(true);
//     expect(component.lastClick).toBe(0);   
//   });

//   it('should change last click on calling toggle icon : Data Bundles', () => {
//     component.toggleIcon(0, false);
//     fixture.detectChanges();
//     expect(component.bundleArray.results[component.lastClick].click).toBe(true);
//     expect(component.lastClick).toBe(0);
//     let prev = component.lastClick;
//     component.toggleIcon(1, false);
//     expect(component.lastClick).toBe(1);
//     expect(component.bundleArray.results[prev].click).toBe(false);
//     expect(component.bundleArray.results[component.lastClick].click).toBe(true);
//   });

//   it('should not change last click on calling toggle icon if disabled', () => {
//     component.lastClick = 1234;
//     component.toggleIcon(0, true);
//     fixture.detectChanges();
//     expect(component.lastClick).toBe(1234);
//   });

//   it('should display data on clicking Bundle Icon : Data', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(0, component.bundleArray.results[0].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.datamob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(false);
//   });

//   it('should display Airtime on clicking Bundle Icon : Airtime', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(1, component.bundleArray.results[1].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.airtimemob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(false);
//   });

//   it('should display SMS on clicking Bundle Icon : SMS', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(2, component.bundleArray.results[2].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.smsmob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(false);
//   });

//   it('should  not display Special on clicking Bundle Icon : Special', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(3, component.bundleArray.results[3].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.specialmob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(true);
//   });

//   it('should not display Voice on clicking Bundle Icon : Voice', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(4, component.bundleArray.results[4].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.voicemob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(true);
//   });

//   it('should not display Social on clicking Bundle Icon : Social', () => {
//     // spyOn(component, 'toggleIcon');
//     component.toggleIcon(5, component.bundleArray.results[5].disable);
//     fixture.detectChanges(); 
//     // let data =  fixture.debugElement.query(By.css('.datamob'));
//     const data: HTMLElement =  fixture.nativeElement.querySelector('.socialmob');
//     fixture.detectChanges();    
//     expect(data.hidden).toBe(true);
//   });

//   it('should not display footer on laoding page', () => {
//      expect(component.footerDiv).toBe(false);
//   });
//   it('should display footer after clicking active bundle', () => {
//     component.toggleIcon(0, component.bundleArray.results[0].disable);
//      expect(component.footerDiv).toBe(true);
//   });


// });
