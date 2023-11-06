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
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
        this.loading = false;
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value === 'All' ? this.getProducts() : this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductByCategory(keyword).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching products by category:', error);
        this.loading = false;
      }
    );
  }
}
