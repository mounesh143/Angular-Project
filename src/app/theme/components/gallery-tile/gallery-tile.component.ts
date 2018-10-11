import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'com-gallery-tile',
  templateUrl: './gallery-tile.component.html',
  styleUrls: ['./gallery-tile.component.scss', '../../scss/_gallery-tile.scss']
})
export class GalleryTileComponent implements OnInit {

  @Input() imagePath: string;
  @Input() infoText: string;

  constructor() {
  }

  ngOnInit() {
    if (this.imagePath === null || this.imagePath === undefined) {
      throw new Error('Please provide a valid image path');
    }

    if (this.infoText === null || this.infoText === undefined) {
      throw new Error('Please provide a valid information text');
    }
  }

}
