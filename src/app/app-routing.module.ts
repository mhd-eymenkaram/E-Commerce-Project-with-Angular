import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetialsComponent } from './products/components/products-detials/products-detials.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"products", component:AllProductsComponent},
  {path:"details", component:ProductsDetialsComponent},
  {path:"cart",component:CartsComponent},
  {path:"**",redirectTo:"products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
