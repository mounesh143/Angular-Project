import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BundleSelectionService {
  public  DATA = 'DATA';
  public SMS = 'SMS';
  public SPECIAL = 'SPEICAL';
  public VOICE = 'VOICE';
  public SOCIAL = 'SOCIAL';
  private finalBundle: any;
  private isBundleSelected: any = false;
  globalBundleEvent = new EventEmitter();
  bundleFlagEvent = new EventEmitter();
  public changeBundle(bundleInfo: any) {
      this.globalBundleEvent.emit(bundleInfo);
      this.finalBundle = bundleInfo;
      this.bundleFlagEvent.emit(true);
      console.log('Change in Bundle - ' + JSON.stringify(bundleInfo));
  }
  public setBundleFlag(flag) {
    this.isBundleSelected = flag;
    this.finalBundle = null;
    console.log('Set Flag in Bundle Service - ' + flag);
    this.bundleFlagEvent.emit(flag);
  }
  public getBundleFlag() {
    return this.isBundleSelected;
  }
  public getFinalBundle() {
    return JSON.parse(this.finalBundle);
  }
  public setInputFocus() {
    const input = document.getElementById('input-box-id') as HTMLInputElement;
    input.disabled = false;
    input.focus();
    input.select();
  }
  public unSetInputFocus() {
    const input = document.getElementById('input-box-id') as HTMLInputElement;
    input.disabled = true;
  }
}
