import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecipeService {
private _recipes=[
{
	id:'1',name:'doughnuts',category:"deep fried",desc:'Doughnuts, the typical American snack. Flour kneaded with milk, sugar with the flavor of cinnamon and nutmeg. Shaped into rings and deep fried. Usually served with sugar glaze or chocolate sauce.',
servings:20,prep_time:'5 minutes',cook_time:'35 minutes',difficulty:'medium',
ingredients:[{name:'maida',amount:3,units:'glass'},{name:'salt',amount:1,units:'teaspoon'},
{name:'baking powder',amount:5,units:'teaspoon'},{name:'cinnamon',amount:1,units:'teaspoon'},
{name:'nutmeg',amount:1,units:'teaspoon'},{name:'butter',amount:2,units:'spoon'},
{name:'sugar',amount:2.5,units:'glass'},{name:'egg',amount:2,units:'unit'},
{name:'milk',amount:2,units:'glass'},{name:'oil',amount:300,units:'ml'}],
image:'/assets/img/recipes/doughnuts.jpg',
steps:['Sift maida with salt, baking powder, cinnamon and nutmeg and keep aside.','Cream butter and sugar. Add eggs and beat well.',
'Add milk and maida and mix into a dough like consistency.','Roll the dough on a lightly floured surface to 1 inch thickness.',
'Cut with floured doughnut cutter and let stand for 15 minutes.','Heat oil and add the doughnuts to it over high heat.',
'Turn immediately and lower heat to medium and fry till brown.','Drain on absorbent paper and serve.']
},
{id:'2',category:"cakes", name:'chocolate lava cake',desc:'A classic chocolate lava cake made with five simple ingredients. So decadent, you just can\'t say no!',
servings:2,prep_time:'5 minutes',cook_time:'30 minutes',difficulty:'easy',ingredients:[
{name:'dark chocolate',amount:135,units:'g'},{name:'butter',amount:95,units:'g'},
{name:'icing sugar',amount:100,units:'g'},{name:'egg yolk',amount:2,units:'unit'},{name:'egg',amount:2,units:'unit'},
{name:'flour',amount:35,units:'g'}],
image:'/assets/img/recipes/ch_lava_cake.jpg',
steps:['Pre heat the oven at 200 degrees.','In a microwaveable bowl add chocolate and butter. Melt it. (You can melt using the double boiler method too.)',
'In another bowl whisk together sugar and eggs.','Mix together the chocolate-butter mixture with the sugar-eggs mixture.',
'Fold in the flour.','Strain the mixture to remove any lumps.','Keep this in the fridge for 5-7 minutes to chill.',
'Pour the batter in greased ramekins.','Bake for 9-10 minutes.','Serve with whipped cream / vanilla ice cream or fresh fruits.']
}

]



getRecipes(){
	return Observable.of(this._recipes);
}

getRecipe(recipeId:string){
	console.log(recipeId)
let recipe = this._recipes.filter((recipe)=>{
	return recipe.id == recipeId;
});
console.log(recipe);
return Observable.of(recipe);
}


}
