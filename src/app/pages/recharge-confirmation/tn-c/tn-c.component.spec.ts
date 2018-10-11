import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnCComponent } from './tn-c.component';
import { ThemeModule } from '../../../theme/theme.module';
import { StoreModule } from '../../../../../node_modules/@ngrx/store';
import { NgbModule, NgbActiveModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { By } from '../../../../../node_modules/@angular/platform-browser';

describe('TnCComponent', () => {
  let component: TnCComponent;
  let fixture: ComponentFixture<TnCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnCComponent ],
      imports:[
        ThemeModule,
        StoreModule.forRoot({}),
        NgbModule.forRoot(),
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('PRINT Page', () => {  
    const spy = spyOn(component, 'PrintPage');
    const printButton = fixture.debugElement.query(By.css('.buttonPrint'));
    
    fixture.detectChanges();    
    printButton.triggerEventHandler('click', null);    
    expect(spy).toHaveBeenCalled();
  });

   it('Save PDF', () => {  
    const spy = spyOn(component, 'savePDF');
    const printButton = fixture.debugElement.query(By.css('.buttonSavePDF'));
    
    fixture.detectChanges();    
    printButton.triggerEventHandler('click', null);    
    expect(spy).toHaveBeenCalled();
  });

   it('Cross', () => {  
    const spy = spyOn(component, 'closeModal');
    const printButton = fixture.debugElement.query(By.css('.closeSymbolModalButton'));
    
    fixture.detectChanges();    
    printButton.triggerEventHandler('click', null);    
    expect(spy).toHaveBeenCalled();
  });

   it('Close', () => {  
    const spy = spyOn(component, 'closeModal');
    const printButton = fixture.debugElement.query(By.css('.buttonCloseModal'));
    
    fixture.detectChanges();    
    printButton.triggerEventHandler('click', null);    
    expect(spy).toHaveBeenCalled();
  });
});
