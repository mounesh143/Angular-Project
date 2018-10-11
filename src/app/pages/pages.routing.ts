import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CanActivateRouteGuard } from './../plugins/session/session.service';
import { ChooseAPhoneComponent } from './choose-aphone/choose-aphone.component';
export const routes: Routes = [
      // { path: '', redirectTo: 'recharge', pathMatch: 'full' },
      {
        path: 'recharge',
        component: PagesComponent,
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'confirmation',
        component: PagesComponent,
        loadChildren: './recharge-confirmation/recharge-confirmation.module#RechargeConfirmationModule'
      },
      {
        path: 'chooseaphone',
        component: ChooseAPhoneComponent
       
      },
      {
        path: 'error',
        component: PagesComponent,
        loadChildren: './fallout/fallout.module#FalloutModule'
      },
      {
        path: 'feedback',
        component: PagesComponent,
        loadChildren: './feedback/feedback.module#FeedbackModule'
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent,
      //   // loadChildren: './page-not-found/recharge-confirmation.module#RechargeConfirmationModule'
      // }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

