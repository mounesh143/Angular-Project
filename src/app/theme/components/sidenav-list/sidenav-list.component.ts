import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from '../../../actions/layout';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'com-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  constructor(private store: Store<fromRoot.State>) {}

  closeSideNav() {
    this.store.dispatch(new fromLayout.CloseSidenavAction);
  }
}
