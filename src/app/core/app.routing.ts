import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from '../pages/page-not-found';
const routes: Routes = [
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full'},
  { path: 'pagenotfound', pathMatch: 'full', component: PageNotFoundComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

