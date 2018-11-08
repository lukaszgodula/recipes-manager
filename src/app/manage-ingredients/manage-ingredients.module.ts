import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { EditIngredientDialogModule } from '../edit-ingredient-dialog/edit-ingredient-dialog.module';
import { IngredientsListTableComponent } from './ingredients-list-table/ingredients-list-table.component';
import { ManageIngredientsRoutingModule } from './manage-ingredients-routing.module';
import { ManageIngredientsComponent } from './manage-ingredients.component';

@NgModule({
  declarations: [ManageIngredientsComponent, IngredientsListTableComponent],
  imports: [
    CommonModule,
    ManageIngredientsRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    EditIngredientDialogModule
  ]
})
export class ManageIngredientsModule { }
