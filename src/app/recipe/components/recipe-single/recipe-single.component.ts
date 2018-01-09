import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RecipeSingleComponent implements OnInit {
@Input() recipe;
  constructor() { }

  ngOnInit() {
  	
  }

}
