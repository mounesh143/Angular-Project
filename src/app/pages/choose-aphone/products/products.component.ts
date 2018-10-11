import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
import { config } from '../../../config';
import { BundleSelectionService, TabviewService } from '../../../theme/services';
import {FormControl} from '@angular/forms';
import { json } from 'express';
@Component({
  selector: 'com-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {

  panelColor = new FormControl('red');
  panelSize = new FormControl('32GB');
  public ASSETS_PATH: string = config.ASSETS;

  @Input() brandName:any='';
  colors=["red","gray","green"];
  
  
  Prod_list=[];
  selectedColor :any=0;
  public ProductList = [{
    imageurl: config.ASSETS + '/images/iPhoneXFrontSilver.jpg',
    productName: 'Apple',   
    size :"32GB",
    moduleName:"+R190pm x 24",
    Prod_cat :"Apple"
    
  },{
    imageurl: config.ASSETS + '/images/iPhone7BlackNew.jpg',
    productName: 'Samsung',   
    size :"32GB",
    moduleName:"+R190pm x 24",
    Prod_cat :"Samsung"
    
  },
  {
    imageurl: config.ASSETS + '/images/iPhone7BlackNew.jpg',
    productName: 'Huawei',  
    size :"32GB",  
    moduleName:"+R190pm x 24",
    Prod_cat :"Huawei"
    
  },
  {
    imageurl: config.ASSETS + '/images/iPhone7BlackNew.jpg',
    productName: 'Huawei',   
    size :"32GB", 
    moduleName:"+R190pm x 24",
    Prod_cat :"Huawei"
    
   
  },
  {
    imageurl: config.ASSETS + '/images/iPhone7BlackNew.jpg',
    productName: 'Huawei',    
    moduleName:"+R190pm x 24",
    size :"32GB",
    Prod_cat :"Huawei"
    
   
  },
  {
    imageurl: config.ASSETS + '/images/iPhone7BlackNew.jpg',
    productName: 'Huawei',    
    size :"32GB",
    moduleName:"+R190pm x 24",
    Prod_cat :"Huawei"
    
   
  }];
 
  constructor() { 
    
  }

  

  ngOnInit() { }
  

  ngDoCheck(){

    console.log(this.ProductList);
    var b_name = this.brandName;
    this.Prod_list =  this.ProductList.filter(function(hero) {return hero.Prod_cat === b_name;});
  }
  

}
