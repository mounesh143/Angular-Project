import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeConfirmationComponent } from './recharge-confirmation.component';
import { RoutingModule } from './recharge-confirmation.routing';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducers';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TnCComponent } from './tn-c/tn-c.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    StoreModule.forFeature('login', reducers)
  ],
  declarations: [ RechargeConfirmationComponent, TnCComponent ],
  entryComponents: [TnCComponent],
  providers: [ NgbActiveModal ]
})
export class RechargeConfirmationModule { }
