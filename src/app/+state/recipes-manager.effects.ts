import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { RecipesManagerState } from 'src/app/+state/recipes-manager.interfaces';

import { RecipesManagerActionTypes } from './recipes-manager.actions';

@Injectable()
export class RecipesManagerEffects {

  @Effect()
  effect$ = this.actions$.ofType(RecipesManagerActionTypes.RecipesManagerAction);

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<RecipesManagerState>) {}
}
