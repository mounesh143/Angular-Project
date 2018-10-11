import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'com-set-limit',
  templateUrl: './set-limit.component.html',
  styleUrls: ['./set-limit.component.scss', '../../scss/_set-limit.scss'],
})
export class SetLimitComponent implements OnInit {
  @Input() bundleType: any = 'Data';
  @Input() bundleUnits: any = ['GB', 'MB', 'KB'];
  @Input() limitStatus: boolean = false;
  @Input() toggleStatus: boolean = true;
  disabled_string: any = 'Unlimited';
  incdec_value: any = 0;
  status: any;
  selectedValue: any;
  input_min: any;
  input_max: any;
  input_disabled: any = false;
  constructor() { }

  ngOnInit() {
    this.status = 'on';
    if (!this.limitStatus) {
      this.input_disabled = true;
    }
    this.selectedValue = this.bundleUnits[0];
  }
  increase() {
    let value = +parseInt(this.incdec_value, 0);
    value++;
    this.incdec_value = value;
  }
  decrease() {
    if (this.incdec_value !== 0) {
      this.incdec_value--;
    }
  }
  updateInputValue(update: any) {
    this.incdec_value = update;
  }
  toggleStatusChange() {
    this.toggleStatus = !this.toggleStatus;
    if (this.toggleStatus) {
      this.status = 'on';
    } else {
      this.input_disabled = true;
      this.status = 'off';
    }
  }
}
