import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
private products =[
{title:'milk',categories:['ingredients','diary'],price:'2',currency:'USD',amount:'1000',units:'ml',picture:'/assets/img/milk.jpg'},
{title:'white sugar',categories:['ingredients','sweets'],price:'3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/sugar.jpg'},
{title:'light brown sugar',categories:['ingredients','sweets'],price:'3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/light_brown_sugar.jpg'},
{title:'flour',categories:['ingredients'],price:'2.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/flour.jpg'},
{title:'salt',categories:['ingredients'],price:'0.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/salt.jpg'},
{title:'egg',categories:['ingredients','other'],price:'200',currency:'USD',amount:'1',units:'unit',picture:'/assets/img/egg.jpg'},
{title:'raspberry',categories:['berries'],price:'5.3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/raspberry.jpg'},
{title:'strawberry',categories:['berries'],price:'4.3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/strawberry.jpg'},
{title:'blueberry',categories:['berries'],price:'5.3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/blueberry.jpg'},
{title:'cherry',categories:['berries'],price:'4.3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/cherry.jpg'},
{title:'oil',categories:['ingredients'],price:'1.5',currency:'USD',amount:'1000',units:'ml',picture:'/assets/img/oil.jpg'},
{title:'pork',categories:['meat'],price:'4',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/pork.jpg'},
{title:'beef',categories:['meat'],price:'6.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/beef.jpg'},
{title:'fish',categories:['meat'],price:'5.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/fish.jpg'},
{title:'baking soda',categories:['ingredients','other'],price:'0.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/baking_soda.jpg'},
{title:'butter',categories:['ingredients','diary'],price:'2.5',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/butter.jpg'},
{title:'vanilla extract',categories:['ingredients','other'],price:'0.9',currency:'USD',amount:'1000',units:'ml',picture:'/assets/img/vanilla_extract.jpg'},
{title:'fig',categories:['fruits'],price:'6.3',currency:'USD',amount:'1000',units:'g',picture:'/assets/img/fig.jpg'},


]
  constructor() { }
getProducts(){
	return this.products;
}
}
