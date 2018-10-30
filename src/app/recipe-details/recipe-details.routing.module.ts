import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from './recipe-details.component';

const recipesDetailsRoutes: Routes = [
  {
    path: '',
    component: RecipeDetailsComponent
  },
  {
    path: 'edit',
    loadChildren: '../edit-recipe/edit-recipe.module#EditRecipeModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipesDetailsRoutes)],
  exports: [RouterModule]
})
export class RecipeDetailsRoutingModule { }
