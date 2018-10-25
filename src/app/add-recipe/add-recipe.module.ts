import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule
  ],
  declarations: [AddRecipeComponent, AddRecipeFormComponent]
})
export class AddRecipeModule { }
