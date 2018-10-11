import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TabviewService } from '../../services';

@Component({
  selector: 'com-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss', '../../scss/_tabview.scss']
})
export class TabviewComponent implements OnInit {

  tab_state: any;
  @Input() tab_names: any;
  constructor(private _tabviewService: TabviewService) {}

   ngOnInit() {
     this.tab_names = this.tab_names.split('|');
     this.tab_state = '0';
   }

   switchTab(currentState: any) {
     if (currentState !== this.tab_state) {
      if (this.tab_state === '0') {
        this.tab_state = '1';
      } else {
        this.tab_state = '0';
      }
     this._tabviewService.switchTab(this.tab_state);
     }
   }
}
