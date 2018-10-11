import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home.component';
import { FeedbackSubmissionComponent } from '../feedback-submission/feedback-submission.component';
import { FeedbackSuccessComponent } from '../feedback-success/feedback-success.component';
export const routes: Routes = [
  {
    path: '',
    component: FeedbackSubmissionComponent
  },
  {
    path: 'success',
    component: FeedbackSuccessComponent
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
