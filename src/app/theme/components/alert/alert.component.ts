import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'com-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['../../scss/_alert.scss', './alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  set status(status: string){
    if (status === 'success') {
      this.flagStatus = true;
    } else {
      this.flagStatus = false;
    }
  };
  @Input() message: string;
  flagStatus: boolean;
  constructor() { }

  ngOnInit() {
        // if (this.status !== null && this.status !== undefined) {
        //   // if (this.status === 'warning') {
        //   //     this.flagStatus = false;
        //   // }else if (this.status === 'success') {
        //   //   this.flagStatus = true;
        //   // }else {
        //   //   throw new Error('Please provide a valid alert status');
        //   // }
        // } else {
        //   throw new Error('Please provide a valid alert status');
        // }

        if ( this.message === null || this.message === undefined) {
          throw new Error('Please provide a valid status message');
        }
  }

}
