import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthGuard } from './guards/auth-guard';
import { RecipesRepository } from './recipes.repository';
import { AuthService } from './services/auth.service';
import { RecipesManagerService } from './services/recipes-manager.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    RecipesRepository,
    AuthService,
    RecipesManagerService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule { }
