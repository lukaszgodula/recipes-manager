import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageIngredientsRoutingModule } from './manage-ingredients-routing.module';
import { ManageIngredientsComponent } from './manage-ingredients.component';

@NgModule({
  declarations: [ManageIngredientsComponent],
  imports: [
    CommonModule,
    ManageIngredientsRoutingModule
  ]
})
export class ManageIngredientsModule { }
