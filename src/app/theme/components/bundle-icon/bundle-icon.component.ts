import { Component, Input, OnInit, OnChanges} from '@angular/core';
import {config } from '../../../config/config';

@Component({
  selector: 'com-bundle-icon',
  templateUrl: './bundle-icon.component.html',
  styleUrls: ['./bundle-icon.component.scss', '../../scss/_bundle-icon.scss'],
})
export class BundleIconComponent implements OnInit, OnChanges{
  @Input() name: any;
  @Input() icon: any;
  @Input() disabled: boolean;
  @Input() soon_text: any = 'Coming online soon';
  @Input() clicked: boolean;
  @Input() color: string;
  cor = "green";
  icon_path: any;
  ngOnInit() {
    if (!this.disabled && this.clicked) {
      this.icon_path = config.ASSETS + '/images/' + this.icon + '_selected.svg';
    } else if (!this.disabled && !this.clicked) {
      this.icon_path = config.ASSETS + '/images/' + this.icon + '.svg';
    } else{
      this.icon_path = config.ASSETS + '/images/' + this.icon + '.svg';
    }
  }
  ngOnChanges() {
    if (!this.disabled && this.clicked) {
      this.icon_path = config.ASSETS + '/images/' + this.icon + '_selected.svg';
    } else if (!this.disabled && !this.clicked) {
      this.icon_path = config.ASSETS + '/images/' + this.icon + '.svg';
    }
  }
}
