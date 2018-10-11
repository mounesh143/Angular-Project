import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { icons, type } from '../config';
@Component({
  selector: 'com-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../scss/_button.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() large_font: boolean;
  @Input() disabled: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  public fa_icon: string;
  public btn_class: string;
  constructor() { }

  ngOnInit() {
    this.fa_icon = icons[this.icon];
    this.btn_class = this.type;
  }
  ngOnChanges() {
    if (this.disabled) {
      document.getElementById('label').style.color = '#7f7f7f';
    } else {
      document.getElementById('label').style.color = '#000000';
    }
  }
}
