import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

import { IngredientListItem } from '../models/ingredient-list-item';
import { RecipesRepository } from '../recipes.repository';
import { RecipesManagerService } from '../services/recipes-manager.service';
import {
  AddIngredient,
  AddRecipe,
  DeleteIngredient,
  DeleteRecipe,
  EditIngredient,
  IngredientAdded,
  LoadRecipeDetails,
  RecipesManagerActionTypes,
  SaveEditedRecipe,
  SetNetworkStatus,
  ThrowAuthError,
  ThrowHttpError,
} from './recipes-manager.actions';

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
  loadIngredients: Observable<Action> = this.actions$.pipe(
    ofType(RecipesManagerActionTypes.LoadIngredients),
    switchMap(() => {
      return this.recipesRepository.getIngredients().pipe(
        concatMap((ingredientsList: IngredientListItem[]) => {
          return [
            {
              type: RecipesManagerActionTypes.IngredientsLoaded,
              payload: { ingredientsList: ingredientsList }
            }
          ];
        })
      );
    })
  );

  @Effect()
  addRecipe: Observable<Action> = this.actions$.pipe(
    ofType<AddRecipe>(RecipesManagerActionTypes.AddRecipe),
    switchMap((action) => {
      return this.recipesRepository.addRecipe(action.payload.recipe).pipe(
        concatMap(() => {
          this.router.navigate(['../']);
          return [
            {
              type: RecipesManagerActionTypes.RecipeAdded,
            }
          ];
        })
      );
    })
  );

  @Effect()
  addIngredient: Observable<Action> = this.actions$.pipe(
    ofType<AddIngredient>(RecipesManagerActionTypes.AddIngredient),
    switchMap((action) => {
      return this.recipesRepository.addIngredient(action.payload.ingredient).pipe(
        concatMap(() => {
          return [
            {
              type: RecipesManagerActionTypes.IngredientAdded,
            }
          ];
        })
      );
    })
  );

  @Effect()
  deleteIngredient: Observable<Action> = this.actions$.pipe(
    ofType<DeleteIngredient>(RecipesManagerActionTypes.DeleteIngredient),
    switchMap((action) => {
      return this.recipesRepository.deleteIngredient(action.payload.ingredientId).pipe(
        concatMap(() => {
          return [
            {
              type: RecipesManagerActionTypes.IngredientDeleted,
            },
            {
              type: RecipesManagerActionTypes.LoadIngredients
            }
          ];
        })
      );
    })
  );

  @Effect()
  ingredientAdded: Observable<Action> = this.actions$.pipe(
    ofType<IngredientAdded>(RecipesManagerActionTypes.IngredientAdded),
    map(() => {
      return {
        type: RecipesManagerActionTypes.LoadIngredients
      };
    })
  );

  @Effect()
  editIngredient: Observable<Action> = this.actions$.pipe(
    ofType<EditIngredient>(RecipesManagerActionTypes.EditIngredient),
    switchMap((action) => {
      return this.recipesRepository.editIngredient(action.payload.ingredient).pipe(
        concatMap(() => {
          return [
            {
              type: RecipesManagerActionTypes.IngredientEdited
            },
            {
              type: RecipesManagerActionTypes.LoadIngredients
            }
          ];
        })
      );
    })
  );

  @Effect()
  deleteRecipe: Observable<Action> = this.actions$.pipe(
    ofType<DeleteRecipe>(RecipesManagerActionTypes.DeleteRecipe),
    switchMap((action) => {
      return this.recipesRepository.deleteRecipe(action.payload.recipeId).pipe(
        concatMap(() => {
          return [
            {
              type: RecipesManagerActionTypes.RecipeDeleted,
            },
            {
              type: RecipesManagerActionTypes.LoadRecipes
            }
          ];
        })
      );
    })
  );

  @Effect()
  editRecipe: Observable<Action> = this.actions$.pipe(
    ofType<SaveEditedRecipe>(RecipesManagerActionTypes.SaveEditedRecipe),
    switchMap((action) => {
      return this.recipesRepository.editRecipe(action.payload.recipe).pipe(
        concatMap(() => {
          this.router.navigate(['../']);
          return [
            {
              type: RecipesManagerActionTypes.EditedRecipeSaved,
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

  @Effect({ dispatch: false })
  throwHttpError: Observable<Action> = this.actions$.pipe(
    ofType<ThrowHttpError>(RecipesManagerActionTypes.ThrowHttpError),
    tap(() => {
      this.recipesManagerService.openSnackBar('Error occured, please refresh app', 'Close', 10000);
    })
  );

  @Effect({ dispatch: false })
  offlineNotify: Observable<Action> = this.actions$.pipe(
    ofType<SetNetworkStatus>(RecipesManagerActionTypes.SetNetworkStatus),
    filter(v => !v.payload.isUserOnline),
    tap(() => {
      this.recipesManagerService.openSnackBar('You are offline! Only cached data will be available', 'Close', 5000);
    })
  );

  constructor(private actions$: Actions,
    private recipesRepository: RecipesRepository,
    private recipesManagerService: RecipesManagerService,
    private router: Router) { }
}
