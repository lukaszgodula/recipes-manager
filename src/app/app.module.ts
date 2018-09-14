import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { RecipesManagerEffects } from 'src/app/core/+state/recipes-manager.effects';
import { initialState } from 'src/app/core/+state/recipes-manager.init';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';
import { CoreModule } from 'src/app/core/core.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
  { recipesManager: recipesManagerReducer },
  {
    initialState : { recipesManager : initialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  },
),
    EffectsModule.forRoot([RecipesManagerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [RecipesManagerEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
