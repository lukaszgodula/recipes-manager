import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeDetailsRoutingModule } from './recipe-details.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule
  ],
  declarations: [RecipeDetailsComponent]
})
export class RecipeDetailsModule { }
