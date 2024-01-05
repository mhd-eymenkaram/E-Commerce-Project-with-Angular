import { Component, OnInit} from '@angular/core';
import { CartsService } from '../../sevices/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartProducts: any[] = [];
  priceTotal:any;
  index:any;
  success:boolean=false;
  constructor(private service:CartsService) {}
  
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
  };

  minsAmount(index:number) {

    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--
    this.getCartsTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
    
  };
  addAmount(index:number) {
    this.cartProducts[index].quantity++
    this.getCartsTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

    }

    deleteProduct(index:number){
      this.cartProducts.splice(index,1)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.getCartsTotal();
    }

    clearCart(){
      this.cartProducts=[]
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.getCartsTotal();
    }

    detectChange(){
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.getCartsTotal();
    }

    addCart(){
      let products =this.cartProducts.map(item=>{
        return{
          productId:item.item.id,
          quantity:item.quantity
        }
      })
      let Model = {
        userId:5,
        date: new Date(),
        products: products
      }
      
      if(this.cartProducts.length !== 0) {
        this.service.creatNewCart(Model).subscribe(res => {
          this.success = true;
          console.log(Model);
        });
      }
      
       


    }

}
