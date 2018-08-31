import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

import { RecipesRepository } from '../recipes.repository';
import { RecipesManagerActionTypes } from './recipes-manager.actions';

@Injectable()
export class RecipesManagerEffects {

  @Effect()
  loadRecipes$: Observable<Action> = this.actions$.pipe(
    ofType(RecipesManagerActionTypes.LoadRecipes),
    switchMap(() => {
      return this.recipesRepository.getRecipes().pipe(
        concatMap((recipesList: RecipesListItem[]) => {
          return [
            {
              type: RecipesManagerActionTypes.RecipesLoaded,
              payload: recipesList
            }
          ];
        })
      );
    })
  );

  constructor(private actions$: Actions,
              private recipesRepository: RecipesRepository) { }
}
