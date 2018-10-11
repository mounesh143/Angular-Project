import { Component,Input } from '@angular/core';
import { config } from '../../config';
import { BundleSelectionService } from '../../theme/services';


@Component({
  selector: 'com-data-bundles',
  templateUrl: './data-bundles.component.html',
  styleUrls: ['./data-bundles.component.scss', '../../theme/scss/_data-bundles.scss'],
})
export class DataBundlesComponent {
  public ASSETS_PATH: string = config.ASSETS;
  tooltip_path: any = this.ASSETS_PATH + '/images/tooltip.svg';
  tab_state: any = [true, false, false, false, false];
  currentTab: any = 0;
  lastClickedTab: any = 0;
  bundleArray: any = config.bunData;
  databundleArray: any = [];
  databundleTab: any = [];
  lastClicked: any = -1;
  @Input() mobile : any;
  @Input() bundleList : any;
  constructor(private _bundleSelect: BundleSelectionService){}
  ngOnInit() {
    if(this.bundleList[0].results.length > 0){
      this.databundleTab = this.bundleList[0].results;
      this.databundleArray = this.bundleList[0].results[0];
    }
    this._bundleSelect.globalBundleEvent.subscribe( res => {
      if (res.com_type !== this._bundleSelect.DATA) {
        if (this.currentTab === this.lastClickedTab && this.lastClicked > -1) {
          this.databundleArray.subresults[this.lastClicked].check = false;
          this.lastClicked = -1;
          this.lastClickedTab = 0;
        }
      }
    });
  }
  showTip() {

  }
  changeTab(id: any) {
    this.tab_state[this.currentTab] = false;
    this.tab_state[id] = true;
    this.currentTab = id;
    this.lastClickedTab = id;
    if(this.lastClicked>-1){
      this.databundleArray.subresults[this.lastClicked].check = false;
    }
    this.databundleArray = this.bundleList[0].results[id];
  }
  select_bundle(idx){
    //one bundle selected at one time
     if(this.currentTab === this.lastClickedTab && this.lastClicked>-1){
       this.databundleArray.subresults[this.lastClicked].check = false;
     }
    this.databundleArray.subresults[idx].check = true;
    this.lastClicked = idx;
    const bundleInfo = this.databundleArray.subresults[idx];
    bundleInfo.com_type = this._bundleSelect.DATA;
    console.log('Selected Bundle - ' + JSON.stringify(bundleInfo));
    this._bundleSelect.changeBundle(bundleInfo);
  }
}


