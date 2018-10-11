import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FalloutGeneralComponent } from './fallout-general/fallout-general.component';
import { FalloutPaymentUnsuccessfulComponent } from './fallout-payment-unsuccessful/fallout-payment-unsuccessful.component';
import { FalloutFeedbackErrorComponent } from './fallout-feedback-error/fallout-feedback-error.component';
import { FalloutNonMTNComponent } from './fallout-non-mtn/fallout-non-mtn.component';
import { FalloutPurchaseLimitComponent } from './fallout-purchase-limit/fallout-purchase-limit.component';
import { ThemeModule } from '../../theme/theme.module';
import { HttpModule } from '../../../../node_modules/@angular/http';
import { RoutingModule } from './fallout.routing';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RoutingModule,
    ThemeModule,
  ],
  declarations: [FalloutGeneralComponent, FalloutPaymentUnsuccessfulComponent, 
    FalloutNonMTNComponent, FalloutFeedbackErrorComponent, FalloutPurchaseLimitComponent,]
})
export class FalloutModule { }
