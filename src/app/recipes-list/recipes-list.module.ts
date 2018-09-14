import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { RecipesListTableComponent } from './recipes-list-table/recipes-list-table.component';
import { RecipesListComponent } from './recipes-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [RecipesListComponent, RecipesListTableComponent],
  exports: [RecipesListComponent]
})
export class RecipesListModule { }
