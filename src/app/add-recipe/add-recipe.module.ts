import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule
  ],
  declarations: [AddRecipeComponent]
})
export class AddRecipeModule { }
