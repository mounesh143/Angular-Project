import { Injectable } from '@angular/core';
import { config } from '../config';
import { Http, Response } from '@angular/http';

@Injectable()
export class SavePDFService {
  constructor(private _http: Http) { }

  downloadURL() {
    const payload = { };
    const downloadURL = config.PLUGIN_URL + '/api/Download';
    // this._http.get(downloadURL).timeout(config.TIME_OUT)
    this._http.get(downloadURL)
    .toPromise()
    .then((resp) => {
      console.log('resp.json()---');
    })
    .catch((err) => {
    });
  }
}
