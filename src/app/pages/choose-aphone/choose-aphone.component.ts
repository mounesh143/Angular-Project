import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { config } from '../../config';
import { BundleSelectionService, TabviewService } from '../../theme/services';
import { UserService } from './User/user.service';


@Component({
  selector: 'com-choose-aphone',
  templateUrl: './choose-aphone.component.html',
  styleUrls: ['./choose-aphone.component.scss'],
  
})
export class ChooseAPhoneComponent implements OnInit {

  selectedDevice : Number;
  setClickedDevice : Function;
  sub_HeaderText :string='R568pm x 24';
  public ASSETS_PATH: string = config.ASSETS;
  header_text:any = "Choose a phone";
  numbers= [
    1,2,3
  ];
  public brandName:string;

  currentTab: any = 0;
  icon_image_unselected = config.ASSETS + '/images/unselected-bundle-desktop.svg';
  icon_image_selected = config.ASSETS + '/images/selected-bundle-desktop.svg';
  sim_Image = config.ASSETS + '/images/simLarge.jpg';
  back_button=true;
  tab_state:any = '0'; 
  unselect_img:boolean = false;
  public DeviceName = [{
    imageurl: config.ASSETS + '/images/AppleResized.png',
    Devicename: 'Apple',
    
  },{
    imageurl: config.ASSETS + '/images/samsungResized.png',
    Devicename: 'Samsung',
    
  },
  {
    imageurl: config.ASSETS + '/images/huaweiResized.png',
    Devicename: 'Huawei',
   
  }];
  test :any [];
  constructor(private _tabviewService: TabviewService,
  
    private userService:UserService
  
  ){

    this.setClickedDevice = function(id,name){
    this.selectedDevice = id;
    this.brandName = name;
    this.icon_image_selected= config.ASSETS + '/images/selected-bundle-desktop.svg';
   
    }
    
    this._tabviewService.tabview_state.subscribe(val => this.tab_state = val);
  }
  ngOnInit(){
  
    
    this.userService.getUser()
    
    console.log(this.userService.getUser().subscribe(
      rep => console.log(rep)
    ));
  }

  switchTab(id: any) {

   
    this.tab_state = '1';
   
    console.log(this.tab_state);
    //this.tab_state[this.currentTab] = false;
  
  }
  


}

