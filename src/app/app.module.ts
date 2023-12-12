import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsModule } from "./products/products.module";
import { CartsComponent } from './carts/components/carts/carts.component';
import { CartsModule } from './carts/carts.module';


@NgModule({
    declarations: [
        AppComponent,
        AllProductsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ProductsModule,
        CartsModule,
        
    ]
})
export class AppModule { }
