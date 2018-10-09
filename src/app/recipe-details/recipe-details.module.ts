import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { RecipeDetailsViewComponent } from './recipe-details-view/recipe-details-view.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeDetailsRoutingModule } from './recipe-details.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RecipeDetailsComponent, RecipeDetailsViewComponent],
})
export class RecipeDetailsModule { }
