import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
@Input() recipes;
  constructor() { }

  ngOnInit() {
  }

}
