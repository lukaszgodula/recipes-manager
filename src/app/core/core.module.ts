import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthGuard } from './guards/auth-guard';
import { AuthInterceptor } from './http-interceptors/auth-interceprtor';
import { RecipesRepository } from './recipes.repository';
import { AuthService } from './services/auth.service';
import { RecipesManagerService } from './services/recipes-manager.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
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
