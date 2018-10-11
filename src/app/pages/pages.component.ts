import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as layout from '../actions/layout';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'com-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public showFooter$: Observable<boolean>;
  public role = 'agent';
  constructor(private _store: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
    this.showFooter$ = this._store.select(fromRoot.showFooter);
    this.role = this.router.url.split('/')[1];
  }
  openSidenav() {
    this._store.dispatch(new layout.OpenSidenavAction);
  }
  closeSidenav() {
    this._store.dispatch(new layout.CloseSidenavAction);
  }
}
