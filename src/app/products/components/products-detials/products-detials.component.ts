import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-detials',
  templateUrl: './products-detials.component.html',
  styleUrls: ['./products-detials.component.scss']
})
export class ProductsDetialsComponent implements OnInit{
  id:any;
  data:any = {};
  loading:boolean=false;
  constructor(private service:ProductsService, private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get("id")
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.loading=true;
    this.service.getProductById(this.id).subscribe(res=>{this.loading=false, this.data = res},
                                                 error=>{this.loading=false, alert(error)})
  }

}
