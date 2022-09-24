import { Component, OnInit } from '@angular/core';
import * as FridgeDetails from "../data/refrigerator.json"

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //fetch details from json 
  fridge:any=(FridgeDetails as any).default;


  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}



