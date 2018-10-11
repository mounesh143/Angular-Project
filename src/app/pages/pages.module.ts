import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RoutingModule } from './pages.routing';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateRouteGuard } from '../plugins/session/session.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ChooseAPhoneComponent } from './choose-aphone/choose-aphone.component';
import { ProductsComponent } from './choose-aphone/products/products.component';
import {UserService} from './choose-aphone/User/user.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    StoreModule.forFeature('pages', reducers)
  ],
  declarations: [PagesComponent, PageNotFoundComponent, ChooseAPhoneComponent, ProductsComponent, ],
  providers: [CanActivateRouteGuard,UserService ]
})
export class PagesModule { }
