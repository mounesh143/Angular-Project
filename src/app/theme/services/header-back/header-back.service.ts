import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderBackService {
  @Output() setlink: any = new EventEmitter<any>();
  switchTab(new_state: any) {
    this.setlink.emit(new_state);
  }
}
