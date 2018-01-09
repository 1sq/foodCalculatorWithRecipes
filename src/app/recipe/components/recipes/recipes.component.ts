import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
recipes;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  	this.recipeService.getRecipes().subscribe((recipes)=>{
  		this.recipes = recipes;
  	});
  }

}
