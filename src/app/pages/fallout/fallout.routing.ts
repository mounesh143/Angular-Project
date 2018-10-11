import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PagesComponent } from './pages.component';
// import { PageNotFoundComponent } from './page-not-found';
import { FalloutGeneralComponent } from './fallout-general/fallout-general.component';
import { FalloutFeedbackErrorComponent } from './fallout-feedback-error/fallout-feedback-error.component';
import { FalloutNonMTNComponent } from './fallout-non-mtn/fallout-non-mtn.component';
import { FalloutPaymentUnsuccessfulComponent } from './fallout-payment-unsuccessful/fallout-payment-unsuccessful.component';
import { FalloutPurchaseLimitComponent } from './fallout-purchase-limit/fallout-purchase-limit.component';
export const routes: Routes = [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      {
        path: 'general',
        component: FalloutGeneralComponent,
        pathMatch: 'full'
        // loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'feedback',
        component: FalloutFeedbackErrorComponent,
        pathMatch: 'full'
        // loadChildren: './recharge-confirmation/recharge-confirmation.module#RechargeConfirmationModule'
      },
      {
        path: 'nonMTN',
        component: FalloutNonMTNComponent,
        pathMatch: 'full'
        // loadChildren: './fallout/fallout.module#FalloutModule'
      },
      {
        path: 'purchaseLimit',
        component: FalloutPurchaseLimitComponent,
        pathMatch: 'full'
        // loadChildren: './fallout/fallout.module#FalloutModule'
      },
      {
        path: 'payment-unsuccessful',
        component: FalloutPaymentUnsuccessfulComponent,
        pathMatch: 'full'
        // loadChildren: './feedback/feedback.module#FeedbackModule'
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent,
      //   // loadChildren: './page-not-found/recharge-confirmation.module#RechargeConfirmationModule'
      // }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

