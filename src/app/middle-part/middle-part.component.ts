import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css'],
  providers: [ProductService]
})
export class MiddlePartComponent implements OnInit {

  constructor(
    private alertifyService:AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute

    ) {}
  title = 'Ürün Listesi'
  filterText = ""
  products: Product[];

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
      });
    })


  }

  addToCart(product){
    this.alertifyService.success(product.name+" Added")
  }

}
