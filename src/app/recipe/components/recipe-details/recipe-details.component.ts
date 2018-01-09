import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
private recipe;
private steps;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	this.route.data.subscribe((data)=>{
      this.recipe = data.recipe[0];
      this.steps = this.recipe.steps.map((step,idx)=>{
      	return {idx,step,done:false};
      });
    })
  }

  markAsDone(idx){
  	this.steps.map((step)=>{
  		if(step.idx == idx){
  			step.done =  !step.done;
  			return step;
  		}
  	})
  }

}
