import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSingleComponent } from './components/recipe-single/recipe-single.component';
import {RecipeService} from './services/recipe.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import {RecipeResolver} from './services/recipe.resolver';
import {PluralPipe} from './pipes/plural.pipe';

const RECIPE_ROUTES:Routes = [
{path:'',children:[
{path:'',pathMatch:'full',component:RecipesComponent},
{path:':recipeId',component:RecipeDetailsComponent,resolve:{recipe:RecipeResolver}},
]}];

const COMPONENTS = [
RecipeDetailsComponent,RecipesComponent,RecipeListComponent,
RecipeSingleComponent
];

const PROVIDERS = [
RecipeResolver,RecipeService
];
const PIPES = [
PluralPipe
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(RECIPE_ROUTES)
  ],
  providers:[...PROVIDERS],
  declarations: [...PIPES, ...COMPONENTS]
})
export class RecipeModule {

static forRoot():ModuleWithProviders{
	return <ModuleWithProviders>{
		ngModule:RecipeModule,
		providers:[RecipeService,RecipeResolver]
	}
 } }
