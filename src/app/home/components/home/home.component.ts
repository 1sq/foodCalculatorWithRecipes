import { Component} from '@angular/core';


export interface MenuItem{
	title:string,
	icon:string,
	link:string,
	class:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

menuItems:MenuItem[]=[
{title:'recipes',icon:'fa fa-list',link:'../recipes',class:'warning'},
{title:'products',icon:'fa fa-birthday-cake',link:'../products',class:'success'},
{title:'create new',icon:'fa fa-plus-circle',link:'../builder',class:'primary'}
];

}
