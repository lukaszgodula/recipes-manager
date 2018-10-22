import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
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
  providers: [],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        RecipesRepository,
        AuthService,
        RecipesManagerService,
        AuthGuard
      ]
    };
  }
}
