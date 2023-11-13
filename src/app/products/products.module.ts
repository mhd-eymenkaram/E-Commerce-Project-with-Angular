import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetialsComponent } from './components/products-detials/products-detials.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    ProductsDetialsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductsModule { }
