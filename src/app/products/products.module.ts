import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetialsComponent } from './components/products-detials/products-detials.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProductsDetialsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProductsModule { }
