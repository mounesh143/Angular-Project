import { NgModule, ModuleWithProviders } from '@angular/core';
// import { Module} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatTooltipModule

} from '@angular/material';

import {
  ButtonComponent,
  InputComponent,
  ProgressbarComponent,
  AlertComponent,
  HeaderComponent,
  SidenavListComponent,
  SlimloaderComponent,
  SideNavItemComponent,
  GalleryTileComponent,
  ThumbInfoComponent,
  SetLimitComponent,
  TabviewComponent,
  MemberListComponent,
  BundleIconComponent,
  BundleHelpIconComponent,
  BundleCardComponent,
  AirtimeInputComponent,
  FooterComponent,
  ModalComponent
} from './components';

import {
  InputRequireddDirective,
} from './directives';

import {
  PreloaderService,
  SlimloaderService,
  AuthenticationService,
  TabviewService,
  CommonService,
  BundleSelectionService,
  HeaderBackService
} from './services';

import {
  MSISDNPipe,
  CheckNullPipe
} from './pipes';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';

const MAT_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatTooltipModule
];

const COM_COMPONENTS = [
  ButtonComponent,
  InputComponent,
  ProgressbarComponent,
  AlertComponent,
  HeaderComponent,
  SidenavListComponent,
  SlimloaderComponent,
  SideNavItemComponent,
  GalleryTileComponent,
  ThumbInfoComponent,
  SetLimitComponent,
  TabviewComponent,
  MemberListComponent,
  BundleIconComponent,
  BundleHelpIconComponent,
  BundleCardComponent,
  AirtimeInputComponent,
  FooterComponent,
  ModalComponent
];

const COM_DIRECTIVES = [
  InputRequireddDirective
];

const COM_SERVICES = [
  PreloaderService,
  SlimloaderService,
  AuthenticationService,
  TabviewService,
  CommonService,
   BundleSelectionService,
  HeaderBackService
];

const COM_PIPES = [
  MSISDNPipe,
  CheckNullPipe
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_MODULES,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('theme', reducers),
    HttpClientModule,
  ],
  declarations: [...COM_COMPONENTS, ...COM_DIRECTIVES, ...COM_PIPES, SelectDropdownComponent],
  exports: [ ...MAT_MODULES, ...COM_COMPONENTS, ...COM_DIRECTIVES, ...COM_PIPES],
  providers : [...COM_PIPES]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        CookieService,
        ...COM_SERVICES,
      ]
    };
  }
}
