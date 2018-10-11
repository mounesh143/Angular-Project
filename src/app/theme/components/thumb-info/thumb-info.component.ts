import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'com-thumb-info',
  templateUrl: './thumb-info.component.html',
  styleUrls: ['../../scss/_thumb-info.scss', './thumb-info.component.scss']
})
export class ThumbInfoComponent implements OnInit {

  @Input() imagePath: string;
  @Input() title: string;
  @Input() subTitle: string;
  constructor() { }

  ngOnInit() {
    if (this.imagePath === null || this.imagePath === undefined) {
        throw new Error('Please provide a valid image path');
    }

    if (this.title === null || this.title === undefined) {
      throw new Error('Please provide a valid text');
    }

    if (this.subTitle === null || this.subTitle === undefined) {
      throw new Error('Please provide a valid text ');
    }

  }
}

