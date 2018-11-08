import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageIngredientsComponent } from './manage-ingredients.component';

const routes: Routes = [
  {
    path: '',
    component: ManageIngredientsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageIngredientsRoutingModule { }
