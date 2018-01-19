import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ProductService} from './product/services/product.service';





const MAIN_ROUTES:Routes=[
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'home',loadChildren:'./home/home.module#HomeModule'},
{path:'products',loadChildren:'./product/product.module#ProductModule'},
{path:'recipes',loadChildren:'./recipe/recipe.module#RecipeModule'},
{path:'builder',loadChildren:'./product-builder/product-builder.module#ProductBuilderModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers:[ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }


