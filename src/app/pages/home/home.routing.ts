import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DataBundlesComponent } from '../data-bundles/data-bundles.component';
import { AirtimeBundlesComponent } from '../airtime-bundles/airtime-bundles.component';
import { SMSBundlesComponent } from '../sms-bundles/sms-bundles.component';
import { SocialBundlesComponent } from '../social-bundles/social-bundles.component';
import { SpecialBundlesComponent } from '../special-bundles/special-bundles.component';
import { VoiceBundlesComponent } from '../voice-bundles/voice-bundles.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {        
        path: '',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'0'}
      },
      {        
        path: 'data',
       // component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'1'}
      },
      {
        path: 'airtime',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'2'}
      },
      {
        path: 'sms',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'3'} 
      },
      {
        path: 'social',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'4'}
      },
      {
        path: 'specials',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'5'}
      },
      {
        path: 'voice',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'6'}
      },
      {
        path: 'help',
        //component: HomeComponent,
        //pathMatch: 'full',
        data : {some_data:'7'}
      }
    ]
  },
  
  // {
  //   path: 'smebundles',
  //   component: SmeBundlesComponent,
  //   pathMatch: 'full' 
  // },
  // {
  //   path: 'datausagecalc',
  //   component: DataUsageCalcComponent,
  //   pathMatch: 'full' 
  // },

];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
