import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { RecipesListModule } from '../recipes-list/recipes-list.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesListModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: []
    };
  }
}
