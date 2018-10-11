import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { SlimloaderService } from '../slimloader';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private _slimLoader: SlimloaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._slimLoader.start();
    return next.handle(req)
    .do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this._slimLoader.complete();
      }
    }, (err: any) => {
      this._slimLoader.complete();
    });
  }
}
