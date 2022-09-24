import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { CardsComponent } from './cards/cards.component';
import { FridgeComponent } from './fridge/fridge.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
//Auth Guard for deals and productdetails component
// import { AuthGuard } from './auth.guard';

//configure routing path
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'products', component: CardsComponent },
  { path: 'fridge', component: FridgeComponent },
  { path: 'washingmach', component: WashingmachineComponent },
  { path: 'micro', component: MicroovenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'deals', component: AmazondealsComponent },
  { path: 'prod_details', component: ProductdetailsComponent },
  { path: 'cartitem', component: CartItemsComponent }
  // {path:'deals',component:AmazondealsComponent, canActivate: [AuthGuard] },
  //{path:'prod_details',component:ProductdetailsComponent , canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
