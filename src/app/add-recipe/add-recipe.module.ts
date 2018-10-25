import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [AddRecipeComponent, AddRecipeFormComponent]
})
export class AddRecipeModule { }
