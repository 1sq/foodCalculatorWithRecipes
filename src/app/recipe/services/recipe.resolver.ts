import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {RecipeService} from './recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<any>{
  constructor(private recipeService:RecipeService,
  private router: Router) {}



resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
	let recipeId = route.params['recipeId'];
	if(recipeId){
		return this.recipeService.getRecipe(recipeId).catch(err=>{
			return Observable.of(err);
		})
	
}
}
}