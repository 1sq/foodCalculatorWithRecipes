import { Component,ViewChild} from '@angular/core';
import {FormGroup,FormArray,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent{
@ViewChild('form') form;
  constructor(private fb:FormBuilder) { }
onChooseProduct(product){
	let formOrders = this.form.orderForm.get('orders') as FormArray;
	let activeOrder = this.form._visibleOrder;
	let orderIngredients = formOrders.controls[activeOrder].get('ingredients') as FormArray;
	let ingredient = this.addIngredient(product);
	orderIngredients.push(ingredient);
}

addIngredient(product){
	return this.fb.group({
		ingredient_title:new FormControl({value:product.title,disabled:true}),
		cost:[product.price],
		units:[product.units],
		amount:[null],
		total_ingredient:[null]
	})
}
}
