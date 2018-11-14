import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { RecipesManagerEffects } from 'src/app/core/+state/recipes-manager.effects';
import { initialState } from 'src/app/core/+state/recipes-manager.init';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';
import { CoreModule } from 'src/app/core/core.module';
import { NavBarModule } from 'src/app/nav-bar/nav-bar.module';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { recipesManager: recipesManagerReducer },
      {
        initialState: { recipesManager: initialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      },
    ),
    EffectsModule.forRoot([RecipesManagerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NavBarModule,
    HomeModule.forRoot(),
  ],
  providers: [RecipesManagerEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
