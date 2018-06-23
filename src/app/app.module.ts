import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { storeFreeze } from 'ngrx-store-freeze';
import { recipesManagerReducer } from 'src/app/+state/recipes-manager.reducer';

import { environment } from '../environments/environment';
import { RecipesManagerEffects } from './+state/recipes-manager.effects';
import { initialState as recipesManagerInitialState } from './+state/recipes-manager.init';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
  { recipesManager: recipesManagerReducer },
  {
    initialState : { recipesManager : recipesManagerInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
),
    EffectsModule.forRoot([RecipesManagerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [RecipesManagerEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
