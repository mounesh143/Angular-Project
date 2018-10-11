import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login';
import { HomeService } from './home';
import { AngularCDRService } from './angularCDR';
import { CanActivateRouteGuard } from './session';
import 'rxjs/add/operator/timeout';
import { PayementGatewayService } from './paymentGateway';
import { StoreService } from './datastore';
import { SavePDFService } from './savepdf';
import { FeedbackService } from './feedback';

export const PLUGIN_SERVICE = [
  LoginService,
  HomeService,
  AngularCDRService,
  PayementGatewayService,
  StoreService,
  SavePDFService,
  FeedbackService,
  CanActivateRouteGuard
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class PluginsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: PluginsModule,
      providers: [
        ...PLUGIN_SERVICE
      ]
    };
  }
}
