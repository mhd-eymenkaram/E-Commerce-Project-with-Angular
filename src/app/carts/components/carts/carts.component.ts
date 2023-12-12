import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartProducts: any[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.getCartProducts();
  }
  
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    console.log(this.cartProducts);
  }
  


}
