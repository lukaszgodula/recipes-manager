import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EditIngredientDialogComponent } from './edit-ingredient-dialog.component';

@NgModule({
  declarations: [EditIngredientDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [EditIngredientDialogComponent]
})
export class EditIngredientDialogModule { }
