import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
@Input('group') orderGroup:FormGroup;
private _total:number = 0;
@Output() totalChanged = new EventEmitter();


  constructor(private fb:FormBuilder){}
ngOnInit(){
	this.orderGroup.valueChanges.subscribe((data)=>{
  		this.recalcTotal(data);
  	})
}
 recalcTotal(value){
 	this._total = value.ingredients.reduce((acc,curIng)=>{

 		let total = ((+curIng.cost/1000)*curIng.amount)+acc;
 		console.log(total,curIng,acc);
 		return total;
 	},0);
 	this.totalChanged.next(this._total);
 }
 
}
