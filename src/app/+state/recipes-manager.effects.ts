import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { RecipesManagerActionTypes } from './recipes-manager.actions';

@Injectable()
export class RecipesManagerEffects {

  @Effect()
  effect$ = this.actions$.ofType(RecipesManagerActionTypes.RecipesManagerAction);

  constructor(private actions$: Actions) {}
}
