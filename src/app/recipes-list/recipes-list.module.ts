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

import { DeleteDialogModule } from '../delete-dialog/delete-dialog.module';
import { RecipesListTableComponent } from './recipes-list-table/recipes-list-table.component';
import { RecipesListComponent } from './recipes-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    DeleteDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  declarations: [RecipesListComponent, RecipesListTableComponent],
  exports: [RecipesListComponent]
})
export class RecipesListModule { }
