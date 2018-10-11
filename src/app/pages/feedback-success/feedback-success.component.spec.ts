import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSuccessComponent } from './feedback-success.component';
import { ThemeModule } from '../../theme/theme.module';
import { StoreModule } from '../../../../node_modules/@ngrx/store';
import { reducers } from '../../reducers';
import { AngularCDRService } from '../../plugins/angularCDR';
import { HttpModule } from '../../../../node_modules/@angular/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { HeaderBackService } from '../../theme/services';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('FeedbackSuccessComponent', () => {
  let component: FeedbackSuccessComponent;
  let fixture: ComponentFixture<FeedbackSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSuccessComponent ],
      imports: [
        ThemeModule,
        StoreModule.forRoot(reducers),
        HttpModule,
        RouterTestingModule
      ],
      providers:[
        AngularCDRService,
        HeaderBackService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the side-image', () => {
    let de: DebugElement = fixture.debugElement;
    let logoDe = de.query(By.css('.image'))
    let logo: HTMLElement = logoDe.nativeElement;
    expect(logo).not.toBe(null);
  });
    
});
