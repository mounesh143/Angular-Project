import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class TabviewService {
  @Output() tabview_state: any = new EventEmitter<any>();
  tab_state: any;
  switchTab(new_state: any) {
    this.tabview_state.emit(new_state);
  }

  constructor() { }

}
