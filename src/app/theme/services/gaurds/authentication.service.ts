import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Route } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as account from '../../../actions/account';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthenticationService implements CanLoad {

  constructor(private _store: Store<fromRoot.State>) { }
  canLoad(route: Route): Observable<boolean> {
    return this._store.select(fromRoot.getLoginStatus);
  }
}
