import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterState } from '@angular/router';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule
  ],

 
 
})
export class CartsModule { }
