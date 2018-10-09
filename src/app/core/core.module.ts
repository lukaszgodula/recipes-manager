import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesRepository } from './recipes.repository';
import { AuthService } from './services/auth.service';
import { RecipesManagerService } from './services/recipes-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RecipesRepository,
    AuthService,
    RecipesManagerService
  ],
  declarations: []
})
export class CoreModule { }
