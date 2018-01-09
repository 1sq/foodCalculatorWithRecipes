import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderFormComponent } from './components/builder-form/builder-form.component';
import { BuilderComponent } from './components/builder/builder.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { OrderIngredientComponent } from './components/order-ingredient/order-ingredient.component';
import { IngredientAmountComponent } from './components/ingredient-amount/ingredient-amount.component';
import {AmountPipe} from './pipes/amount.pipe';
import {KeysPipe} from './pipes/keys.pipe';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';

const PIPES = [AmountPipe,
KeysPipe
]
const COMPONENTS=[
IngredientListComponent,IngredientAmountComponent,OrderIngredientComponent,
OrderComponent,BuilderComponent,BuilderFormComponent
];

const BUILDER_ROUTES:Routes=[
{path:'',pathMatch:'full',component:BuilderComponent}
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(BUILDER_ROUTES),
    FormsModule,ReactiveFormsModule
  ],
  declarations: [...PIPES,...COMPONENTS]
})
export class ProductBuilderModule { }
