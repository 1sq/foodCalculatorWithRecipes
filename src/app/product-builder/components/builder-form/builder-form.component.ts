import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormBuilder,FormArray,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.scss']
})
export class BuilderFormComponent implements OnInit {
orderForm:FormGroup;
private _visibleOrder:number = 0;
private _totalCost=0;
private arrayOfTotals = [];

	get openOrder() {
	    return this._visibleOrder;
	  }

    set openOrder(index: number) {
    this._visibleOrder = index;   
	}

@Output() submitted:EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  	this.orderForm = this.fb.group({
  		title:['',Validators.required],
  		orders:this.fb.array([
  			this.addOrder()
  			]),
  		total:[null]
  	})
  }

addOrder(){
	return this.fb.group({
		order_name:[''],
		ingredients:this.fb.array([],Validators.required),
		subtotal:[null]	
	})
}

addIngredient(){
	return this.fb.group({
		ingredient_title:[''],
		cost:[null],
		amount:[null],
		total_ingredient:[null]
	})
}

pushIngredient(ingredient){
	let ingredientsArray = this.orderForm.get('orders').get('ingredients') as FormArray;
	ingredientsArray.push(ingredient);
}

pushOrder(){
	let ordersArray = this.orderForm.get('orders') as FormArray;
	ordersArray.push(this.addOrder());
	this.openOrder = ordersArray.length-1;
}

removeOrder(index:number){
	let ordersArray = this.orderForm.get('orders') as FormArray;
	ordersArray.removeAt(index);
}

submitForm(){
	if(!this.orderForm.valid) return;
	this.submitted.next(this.orderForm.value);
}

  toggleOrder(index: number) {
    if (this.openOrder === index) {
      this.openOrder = -1;
      return;
    }
    this.openOrder = index;
}

onTotalChanged(total,i){
this.arrayOfTotals[i] = total;
this.calculateTotal(this.arrayOfTotals);
}

calculateTotal(arr){
	this._totalCost = arr.reduce((acc,val)=>{
		return acc+val;
	},0)
}

sendOrderToApi(){
	let order={};
	order['form'] = this.orderForm.value;
	order['total'] = this._totalCost;
	console.log(order);
}
}
