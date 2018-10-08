import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RecipeDetailsComponent, RecipeDetailsViewComponent],
})
export class RecipeDetailsModule { }
