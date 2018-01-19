import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { HomeMenuItemComponent } from './components/home-menu-item/home-menu-item.component';


const COMPONENTS = [
HomeComponent,HomeMenuComponent,HomeMenuItemComponent
];
 
const HOME_ROUTES:Routes = [
{path:'',children:[{
	path:'',pathMatch:'full',component:HomeComponent}]}
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [...COMPONENTS]
})
export class HomeModule { }
