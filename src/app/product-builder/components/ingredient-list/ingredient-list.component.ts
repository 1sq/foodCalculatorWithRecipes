import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {ProductService} from '../../../product/services/product.service';
import {DomSanitizer,SafeStyle} from '@angular/platform-browser';
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
private _products = [];
private image;
private groupedProducts = {};

@Output() chooseProduct:EventEmitter<any> = new EventEmitter<any>();

 constructor(private productService:ProductService,private sanitize:DomSanitizer){}

  ngOnInit() {
  	this._products = this.productService.getProducts();
  	this._products.map((product)=>{
  		product.safeUrl = this.sanitize.bypassSecurityTrustStyle(`url(${product.picture})`);
  	})
  	this.groupProducts(this._products);
  }

onChooseProduct(product){
	if(product){
		this.chooseProduct.next(product);
	}
}

groupProducts(products){
	let uniqueArray=[];
	products.forEach((product)=>{
		product.categories.forEach((cat)=>{
				if(!this.groupedProducts.hasOwnProperty(cat) && !uniqueArray.includes(product.title)){
					uniqueArray.push(product.title);
					this.groupedProducts[cat] = [product];
				}else{
					if(!uniqueArray.includes(product.title)){
						uniqueArray.push(product.title);
						this.groupedProducts[cat].push(product);
					}
					
				}
			
		})
	})
	let superArr=[];
	for(var key in this.groupedProducts){
		let subArr=[];
		subArr.push(key);
		subArr = [...subArr,this.groupedProducts[key]]
		superArr.push(subArr);
	}
	this.groupedProducts = superArr;

}
}
