import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeBundlesComponent } from './airtime-bundles.component';

describe('AirtimeBundlesComponent', () => {
  let component: AirtimeBundlesComponent;
  let fixture: ComponentFixture<AirtimeBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimeBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimeBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
