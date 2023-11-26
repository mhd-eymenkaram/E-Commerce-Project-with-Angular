import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetialsComponent } from './components/products-detials/products-detials.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsDetialsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductsModule { }
