import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//API
import { HttpClientModule } from '@angular/common/http';
//custom components
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TrainingComponent } from './training/training.component';
import { CardsComponent } from './cards/cards.component';
import { FridgeComponent } from './fridge/fridge.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AllProductsComponent } from './allproducts/allproducts.component';
import { DealsComponent } from './deals/deals.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WashingmachinedealsComponent } from './washingmachine/washingmachinedeals/washingmachinedeals.component';
import { SquarePipe } from './square.pipe';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    TrainingComponent,
    CardsComponent,
    FridgeComponent,
    MicroovenComponent,
    AdvertisementComponent,
    AllProductsComponent,
    DealsComponent,
    WashingmachineComponent,
    WashingmachinedealsComponent,
    SquarePipe,
    AmazondealsComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    ProductdetailsComponent,
    LoginComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
