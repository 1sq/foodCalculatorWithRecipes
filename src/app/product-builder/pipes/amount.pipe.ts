import {Pipe,PipeTransform} from '@angular/core';


const units = {
'g':{t:1000000,kg:1000,g:1},
'ml':{l:1000,ml:1},
'unit':{u:1}
}


@Pipe({name:'amountPipe'})
export class AmountPipe implements PipeTransform {
	transform(value:any,appendix:string){
if(!appendix){
	return value;
	}
	if(value == 0) return 0;
	let newValue='';
		for(var key in units[appendix]){
			var curVal = units[appendix][key];
			if(value && value >0){
				if(value >= curVal){				
				let subval = +Math.floor(value/curVal);
				value = value - (curVal*subval)
				newValue+=subval+key;			
			}
			}		
		}

	return newValue;
}
}