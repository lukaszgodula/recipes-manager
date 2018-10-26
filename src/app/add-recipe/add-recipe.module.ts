import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddIngredientDialogComponent } from './add-ingredient-dialog/add-ingredient-dialog.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';
import { AddRecipeService } from './add-recipe.service';

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [AddRecipeComponent, AddRecipeFormComponent, AddIngredientDialogComponent],
  entryComponents: [
    AddIngredientDialogComponent
  ],
  providers: [
    AddRecipeService
  ]
})
export class AddRecipeModule { }
