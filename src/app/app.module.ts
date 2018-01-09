import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ProductModule} from './product/product.module';



const MAIN_ROUTES:Routes=[
{path:'products',loadChildren:'./product/product.module#ProductModule'},
{path:'recipes',loadChildren:'./recipe/recipe.module#RecipeModule'},
{path:'home',loadChildren:'./home/home.module#HomeModule'},
{path:'builder',loadChildren:'./product-builder/product-builder.module#ProductBuilderModule'},
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'**',redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MAIN_ROUTES),
    ProductModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


