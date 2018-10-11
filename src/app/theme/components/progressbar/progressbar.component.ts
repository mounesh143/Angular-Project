import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'com-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss', '../../scss/_progressbar.scss'],
})
export class ProgressbarComponent implements OnInit {

  @Input() maxValue: number;
  @Input() value: number;
  @Input() progressValue: number;
  _progressValue: number;
  constructor() { }
  ngOnInit() {
    if (this.progressValue === null || this.progressValue === undefined || isNaN(this.progressValue)) {
      try {
        this._progressValue = (this.value / this.maxValue) * 100;
        if ( isNaN(this._progressValue) || this._progressValue < 0) {
          throw new Error(`The 'Max' and 'Value' fields should be numbers and 'Unit' should not be empty`);
        }
      } catch (error) {
          throw new Error(`The 'Max' and 'Value' fields should be numbers and 'Unit' should not be empty `);
      }
    } else {
      this._progressValue = this.progressValue;
    }
  }
}
