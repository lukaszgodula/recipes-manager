import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecipesManagerState } from './recipes-manager.interfaces';

export class FromRecipesManagerState {
    public static readonly self = createFeatureSelector<RecipesManagerState>('recipesManager');

    public static readonly recipesList = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipesList ? state.recipesList : [];
      });
}
