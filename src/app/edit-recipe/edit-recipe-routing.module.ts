import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { EditRecipeComponent } from './edit-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: EditRecipeComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRecipeRoutingModule { }
