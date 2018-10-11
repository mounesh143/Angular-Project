import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { config } from '../../../config';
@Component({
  selector: 'com-airtime-input',
  templateUrl: './airtime-input.component.html',
  styleUrls: ['../../scss/_airtime-input.scss', './airtime-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AirtimeInputComponent,
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class AirtimeInputComponent implements ControlValueAccessor, OnInit {

  @Input() type: string;
  @Input() label: string;
  @Input() placeholder = '';
  @Input()  _value: any;
  @Input()
  set inactive(inactive: boolean){
    if (inactive) {
      this.wrapper_class = 'wrapper-disable';
    }
  }
  @Input()
  set error(error: string){
    if (error !== '') {
      this.wrapper_class = 'wrapper-error';
      this.errormsg = error;
    } else {
      this.errormsg = '';
    }
  };
  public min_input: any = config.MIN_AIRTIME_INPUT;
  public max_input: any = config.MAX_AIRTIME_INPUT;
  public hide_clear_box = true;
  public wrapper_class = 'wrapper-blur';
  public errormsg = '';
  public onChange: (_: any ) => {};
  public onTouch: () => {};
  primary_color: any = '#ffcb05';
  error_color: any = '#ee4a00';
  constructor() { }
  get value(): any {
    return this._value;
  }
  set value(v: any){
    if (v !== this._value) {
      this._value = v;
      this.onChange(this._value);
    }
  }
  ngOnInit() {
    document.getElementById('r-text-div').style.backgroundColor = this.primary_color;
  }
  renderChange(value): void {
    this._value = value;
    this.errormsg = '';
    this.wrapper_class = 'wrapper-blur';
    document.getElementById('r-text-div').style.backgroundColor = this.primary_color;
    if (this._value < this.min_input) {
      this.errormsg = 'The amount you enter cannot be less than ' + config.CURRENCY + config.MIN_AIRTIME_INPUT;
      this.wrapper_class = 'wrapper-error';
      document.getElementById('r-text-div').style.backgroundColor = this.error_color;
    }
    if (this._value > this.max_input) {
      this.errormsg = 'The amount you enter cannot be more than ' + config.CURRENCY + config.MAX_AIRTIME_INPUT;
      this.wrapper_class = 'wrapper-error';
      document.getElementById('r-text-div').style.backgroundColor = this.error_color;
    }
    this.hide_clear_box = this._value === '' ? true : false;
  }
  clearField() {
    this._value = '';
    this.hide_clear_box = true;
  }
  onBlur() {
    this.wrapper_class = this._value === '' ? 'wrapper-blur' : 'wrapper-filled';
    if (this.errormsg !== '') {
    this.wrapper_class = 'wrapper-error';
   };
    this.hide_clear_box = true;
  }
  onFocus() {
    this.wrapper_class = 'wrapper-focus';
    this.hide_clear_box = this._value === '' ? true : false;
  }
  writeValue(value: any): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
