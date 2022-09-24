import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Dependency injection
  constructor(private authService: UserService, private cartSvc: CartService) { }
  auth: boolean = false;

  //Add to cart
  cartCount: number = 0;

  //string interpolation
  title = 'Dukaan';

  //property binding
  public logo = "https://www.indusguru.in/images/gurukul_yellow.png";
  // public logo="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg";

  //EVENT BINDING
  onSearch() {
    alert("Will contact shortly");
  }

  //Two way binding
  // username=''


  //Accessing the Search Component
  //Property
  productentered: string = ' '  //Laptop

  //Event
  search_product(product_name: string): void { //Laptop
    if (!product_name) {
      this.productentered = ' ';
    }
    this.productentered = product_name; //Laptop
    console.log(product_name)
  }

  //Auth Service
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cartCount = response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSvc.countSubject.subscribe(
      (response) => {
        this.cartCount = response;
        console.log(this.cartCount);
      }
    )
  }

}
