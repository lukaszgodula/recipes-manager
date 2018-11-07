import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { AddRecipeComponent } from './add-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: AddRecipeComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRecipeRoutingModule { }
