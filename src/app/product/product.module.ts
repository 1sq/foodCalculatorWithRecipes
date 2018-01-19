import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSingleComponent } from './components/product-single/product-single.component';
import { ProductComponent } from './components/product/product.component';


const PRODUCT_ROUTES:Routes = [
{path:'',children:[
{path:'',component:ProductComponent}]}
];

const COMPONENTS = [
ProductComponent,ProductListComponent,ProductSingleComponent
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(PRODUCT_ROUTES)
  ],
  
  declarations: [...COMPONENTS]
})
export class ProductModule {
}
