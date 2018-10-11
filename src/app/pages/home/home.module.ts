import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RoutingModule } from './home.routing';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducers';
import { DataBundlesComponent } from '../data-bundles/data-bundles.component';
import { SMSBundlesComponent } from '../sms-bundles/sms-bundles.component';
import { AirtimeBundlesComponent } from '../airtime-bundles/airtime-bundles.component';
import { SocialBundlesComponent } from '../social-bundles/social-bundles.component';
import { SpecialBundlesComponent } from '../special-bundles/special-bundles.component';
import { VoiceBundlesComponent } from '../voice-bundles/voice-bundles.component';
import { NgbModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BundleErrorComponent } from './bundle-error/bundle-error.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', reducers),
    NgbModule.forRoot()
  ],
  declarations: [ HomeComponent, DataBundlesComponent, AirtimeBundlesComponent, SMSBundlesComponent, SocialBundlesComponent, SpecialBundlesComponent, VoiceBundlesComponent,BundleErrorComponent ],
  entryComponents: [BundleErrorComponent],
  providers:[NgbActiveModal ]
})
export class HomeModule { }
