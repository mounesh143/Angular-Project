import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRatingModule } from "ngx-bar-rating";
import { FeedbackSubmissionComponent } from '../feedback-submission/feedback-submission.component';
import { FeedbackSuccessComponent } from '../feedback-success/feedback-success.component';
import { ThemeModule } from '../../theme/theme.module';
import { HttpModule } from '../../../../node_modules/@angular/http';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { RoutingModule } from './feedback.routing';

@NgModule({
  imports: [
    CommonModule,
    BarRatingModule,
    HttpModule,
    RoutingModule,
    ThemeModule,
    ReactiveFormsModule,
  ],
  declarations: [FeedbackSubmissionComponent, FeedbackSuccessComponent]
})
export class FeedbackModule { }
