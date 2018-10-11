import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'com-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss', '../../scss/_member-list.scss']
})
export class MemberListComponent implements OnInit {

  constructor() { }
  @Input() memberData: any;
  firstname: any;
  lastname: any;
  msisdn: any;
  ngOnInit() {
  }

}
