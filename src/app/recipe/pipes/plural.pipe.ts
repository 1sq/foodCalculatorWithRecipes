import {Pipe,PipeTransform} from '@angular/core';


@Pipe({name:'pluralPipe'})

export class PluralPipe implements PipeTransform {
	transform(value:any,amount:any){

	if(!value || !amount) return value;
	if(amount != 1){
		switch (value) {
			case "glass":
				return value+'es';
			case "unit":
			case "spoon":
			case "teaspoon":
				return value+'s';
			
			default:
				return value;
		}
	}else{
		return value;
	}

}
}