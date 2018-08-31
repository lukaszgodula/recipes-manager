import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesRepository } from './recipes.repository';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RecipesRepository
  ],
  declarations: []
})
export class CoreModule { }
