import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalloutGeneralComponent } from './fallout-general.component';
import { ThemeModule } from '../../../theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../reducers';
import { DebugElement } from '../../../../../node_modules/@angular/core';
import { By } from '../../../../../node_modules/@angular/platform-browser';

describe('FalloutGeneralComponent', () => {
  let component: FalloutGeneralComponent;
  let fixture: ComponentFixture<FalloutGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalloutGeneralComponent ],
      imports: [
        ThemeModule,
        StoreModule.forRoot(reducers),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalloutGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the logo', () => {
    let de: DebugElement = fixture.debugElement;
    let logoDe = de.query(By.css('.header-logo'))
    let logo: HTMLElement = logoDe.nativeElement;
    expect(logo).not.toBe(null);
  });

  it('should load the side-image', () => {
    let de: DebugElement = fixture.debugElement;
    let logoDe = de.query(By.css('.Error1'))
    let logo: HTMLElement = logoDe.nativeElement;
    expect(logo).not.toBe(null);
  });
});
