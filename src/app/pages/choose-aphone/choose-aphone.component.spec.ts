import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAPhoneComponent } from './choose-aphone.component';

describe('ChooseAPhoneComponent', () => {
  let component: ChooseAPhoneComponent;
  let fixture: ComponentFixture<ChooseAPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
