import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { config } from '../../../config';
import { AngularCDRService } from '../../../plugins/angularCDR';

@Component({
  selector: 'com-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../scss/_header.scss', './header.component.scss']
})

export class HeaderComponent implements OnInit, OnChanges {
  @Input() header_text: string;
  @Input() feedback: string='';
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() hearder_number=[];
  @Input()  back_button:boolean= true;
  // @Input() number_button:boolean= true;
 
  public ASSETS_PATH: string = config.ASSETS;
  showBackToProduct = false;
  startTime: any;
  constructor(private _cdr: AngularCDRService) {}
  ngOnInit() {
  }
  ngOnChanges() {
    this.startTime = this._cdr.getTransactionTime(0).toString();
  }
  // goBack() {
  //   console.log("inside back========");
  //   this.navigate_name.emit("");
  //   // this._backlink.back_link()
  // }
}

