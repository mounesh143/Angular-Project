import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { icons } from '../config';
@Component({
  selector: 'com-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['../../scss/_sidenavitem.scss', './side-nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavItemComponent implements OnInit {
  @Input() label: string;
  @Input() set icon(icon: string){
    this.faIcon = icons[icon];
  };
  @Input() set link(link: string){
    this.redirectURL = link;
  };
  @Output() closeMenu: EventEmitter<any> = new EventEmitter();
  public faIcon: string;
  public redirectURL: string;
  constructor() { }

  ngOnInit() {
  }
}

