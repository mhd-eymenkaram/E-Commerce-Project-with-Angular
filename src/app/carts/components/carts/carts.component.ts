import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartProducts: any[] = [];
  priceTotal:any;

  constructor() {}
  
  ngOnInit(): void {
    this.getCartProducts();
  }
  
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartsTotal();
    // console.log(this.cartProducts);
  }

  getCartsTotal() {
    let total = 0;
    for (let product of this.cartProducts) { 
      total += product.item.price * product.quantity; 
    }
    this.priceTotal = total;
  }
  
}
