import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  //Array- *ngFor
  Products:any[]=[
    {
      'productname':'Kids Toys'
    },
    {
      'productname':'Mobiles'
    },
    {
      'productname':'Dress'
    },
    {
      'productname':'Footwear'
    },
    {
      'productname':'Grocery'
    },
    {
      'productname':'Electronics'
    },
  ]

  //Event to hide prod details
  isVisible:boolean=true;
   hide_details(){
    this.isVisible=!this.isVisible;
   }

   /* 14-09-2022 */
   
   //ngSwitch
   product='Dress';

   //style binding
   errorColor:string='green';

   ProdDetails:any=[
    {
 
      'pid':'100',
      'pname':'toys',
      'status':'Active',
      'color':'green'
    },
    {
      'pid':'101',
      'pname':'mobiles',
      'status':'outOfStock',
      'color':'yellow'
    },
    {
      'pid':'102',
      'pname':'shoes',
      'status':'inActive',
      'color':'red'
    },
    {
      'pid':'103',
      'pname':'dress',
      'status':'Active',
      'color':'green'
    },
    {
      'pid':'104',
      'pname':'shirts',
      'status':'inActive',
      'color':'red'
    },
   ]

   getColor(){
    return 'purple'
   }

  //ngClass - created an instance for the class products
  prod:products=new products();
  //using an array we can access the properties and bind them to ngClass
  prod_array:string[]=['blue','shadow'];
  //date property for PIPE demo
  date_today:string | undefined;
  price:number | undefined;

  ngOnInit(): void {
    //initialize the date in the oninit function
    this.date_today=new Date().toDateString();
    this.price=1000;

  }
   

}
class products{
    blue:boolean=true;
    shadow:boolean=true;
    size:boolean=true;
  }