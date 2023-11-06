import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res); // Add error handling here
      this.products = res;
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      console.log(res); // Add error handling here
      this.categories = res;
    });
  }

  filtreCategory(event:any){
    let value = event.target.value;
    value === "All" ?this.getProducts():
    this.getProductsCategory(value)
  }

  getProductsCategory(keyword:string){
    this.service.getProductByCategory(keyword).subscribe((res:any) => this.products=res)
  }

}

