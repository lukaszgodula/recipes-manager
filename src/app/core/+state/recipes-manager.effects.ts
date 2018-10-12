import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

import { RecipesRepository } from '../recipes.repository';
import { RecipesManagerService } from '../services/recipes-manager.service';
import { LoadRecipeDetails, RecipesManagerActionTypes, ThrowAuthError } from './recipes-manager.actions';

@Injectable()
export class RecipesManagerEffects {

  @Effect()
  loadRecipes: Observable<Action> = this.actions$.pipe(
    ofType(RecipesManagerActionTypes.LoadRecipes),
    switchMap(() => {
      return this.recipesRepository.getRecipes().pipe(
        concatMap((recipesList: RecipesListItem[]) => {
          return [
            {
              type: RecipesManagerActionTypes.RecipesLoaded,
              payload: { recipesList: recipesList }
            }
          ];
        })
      );
    })
  );

  @Effect()
  loadRecipeDetails: Observable<Action> = this.actions$.pipe(
    ofType<LoadRecipeDetails>(RecipesManagerActionTypes.LoadRecipeDetails),
    switchMap(action => {
      return this.recipesRepository.getRecipeDetails(action.payload.id).pipe(
        concatMap((recipe: Recipe) => {
          return [
            {
              type: RecipesManagerActionTypes.RecipeDetailsLoaded,
              payload: { recipeDetails: recipe }
            }
          ];
        })
      );
    })
  );

  @Effect()
  throwAuthError: Observable<Action> = this.actions$.pipe(
    ofType<ThrowAuthError>(RecipesManagerActionTypes.ThrowAuthError),
    tap(action => {
      this.recipesManagerService.openSnackBar(action.payload.errorMessage, 'Close', 5000);
    }),
    map(() => {
      return {
        type: RecipesManagerActionTypes.SetAuthProgress,
        payload: { authInProgress: false }
      };
    })
  );

  constructor(private actions$: Actions,
    private recipesRepository: RecipesRepository,
    private recipesManagerService: RecipesManagerService) { }
}
