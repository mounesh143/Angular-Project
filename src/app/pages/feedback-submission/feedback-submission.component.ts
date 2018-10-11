import { Component, OnInit,  ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../config';
import { Router } from '@angular/router';
import { FeedbackService } from '../../plugins/feedback';
import { FeedbackForm } from '../../utils/interface/feedback';

@Component({
  selector: 'com-feedback-submission',
  templateUrl: './feedback-submission.component.html',
  styleUrls: ['./feedback-submission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackSubmissionComponent implements OnInit {
  ASSETS_PATH: any = config.ASSETS;
  feedbackForm: FormGroup;
  feedbackContent : string = '';
  feedbackLen : number = 0;
  header_text:any = "Thanks, that\'s it!";
  constructor(private fb: FormBuilder, private _router: Router,private _feedback:FeedbackService) {
  }

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      feedback: ['', [Validators.required]],
      formRating: ['', [Validators.required]]
    });
    this._feedback.getBackDetails()
    .then(response => {
      console.log("feedback details success=====");
    })
    .catch(err => {
      console.log('err feedback details-' + err);
    });    
  }

  onKey(){
    this.feedbackLen = this.feedbackContent.length;
    console.log(this.feedbackLen +' ' + this.feedbackContent)
  }
  // onSubmit() {

  // }
  submitReview({value, valid}: {value: FeedbackForm, valid: boolean}){
    //this._feedback.getBackDetails()
    //feedback feedbackService    
    const e_com_num = '123534546457';
    const rating = value.formRating.toString();
    console.log('rating ==>' + rating);    
    const feedback = value.feedback.toString();
    console.log('feedback ==>' + feedback);
    console.log('submitReview');
    this._feedback.sendFeedback(rating, feedback, e_com_num)
    .then(response => {
      console.log("feedback details success=====");
    })
    .catch(err => {
      console.log('err feedback details-' + err);
    });
  }

  gotoHome(){
    console.log('routing called')
    this._router.navigate(['recharge']);
  }
}
