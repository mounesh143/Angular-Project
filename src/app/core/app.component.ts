import { Component, OnInit, AfterViewInit, AfterContentChecked} from '@angular/core';
import { PreloaderService } from '../theme/services';
import { config } from '../config';
import { Store } from '@ngrx/store';
import * as slimloader from '../actions/slimloader';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { saveState } from './app.state';

@Component({
  selector: 'com-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {

  public showSidenav$: Observable<boolean>;
  public ASSETS: string = config.ASSETS;

  constructor(private _loader: PreloaderService, private store: Store<fromRoot.State>) {
      // this.store.dispatch(new slimloader.StopSlimloaderAction);
      // this.store.subscribe(state => saveState(state));
    }
  ngOnInit(): void {
    // this._loader.show();
  }
  ngAfterViewInit(): void {
  }
  ngAfterContentChecked(): void {
    // this._loader.hide();
    // this._slimLoader.complete();
    // this._loader.hide(1000);
  }

}
