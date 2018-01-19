import { Component, OnInit,Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-ingredient',
  templateUrl: './order-ingredient.component.html',
  styleUrls: ['./order-ingredient.component.scss']
})
export class OrderIngredientComponent {
@Input('group') ingredientGroup:FormGroup;
 _total = 0;

get total(){
	let cost = this.ingredientGroup.get('cost').value/1000;
	let amount =this.ingredientGroup.get('amount').value;
	this._total = cost*amount;
return this._total;	
}

get units(){
return this.ingredientGroup.get('units').value;
}


}
