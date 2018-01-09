import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
products;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  	this.products = this.getProducts();
  }
getProducts(criteria?){
	if(!criteria){
		return this.productService.getProducts();
	}
}
}
