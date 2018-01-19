import { Component, forwardRef,Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INGR_AMOUNT_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IngredientAmountComponent),
  multi: true
};

@Component({
  selector: 'app-ingredient-amount',
  templateUrl: './ingredient-amount.component.html',
  styleUrls: ['./ingredient-amount.component.scss'],
  providers:[INGR_AMOUNT_ACCESSOR]
})
export class IngredientAmountComponent implements ControlValueAccessor {
  @Input() units;
  value:number;
  focused: string;
   onTouch: Function;
   onModelChange: Function;
   _incrementOrDecrementStep:number =100;
   extraMeasurements=[
  {name:'spoon',size:30,height:'110%',img:'/assets/img/spoon.png'},
  {name:'teaspoon',size:15,height:'100%',img:'/assets/img/teaspoon.png'},
  {name:'glass',size:200,height:'100%',img:'/assets/img/glass.png'}
  ];
   chosenMeasure = null;
  get incrementOrDecrementStep(){
    if(this.units == 'unit'){
      this._incrementOrDecrementStep = 1;
    }
    return this._incrementOrDecrementStep;
  }
  constructor() { }

 registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
  	if(!value){
  		value = 0;
  	}
    this.value = value;
	}

  increment(){
  	this.value += this._incrementOrDecrementStep;
  	this.onModelChange(this.value);
  }

   decrement(){
   	let value = this.value;
   	value -= this._incrementOrDecrementStep;
   	if(value<0){
   		this.value = 0;
   	}else{
   		this.value -= this._incrementOrDecrementStep;
   	}
  	this.onModelChange(this.value);
  }

  increaseStep(){
  	this._incrementOrDecrementStep+=10;
  }

  decreaseStep(){
  	if(this._incrementOrDecrementStep>0){
  		this._incrementOrDecrementStep-=10;
  	}
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
}

onChooseMeasure(name){
	if(this.chosenMeasure == name){
		this.chosenMeasure = null;
		this._incrementOrDecrementStep=100;
	}else{
		this.chosenMeasure = name;
		this._incrementOrDecrementStep = this.extraMeasurements.filter((measure)=>{
			return measure.name == name;
		})[0].size;
	}
}
}
