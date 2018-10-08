import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { RecipesManagerActions, RecipesManagerActionTypes } from './recipes-manager.actions';

export function recipesManagerReducer(state: RecipesManagerState, action: RecipesManagerActions): RecipesManagerState {
  switch (action.type) {
    case RecipesManagerActionTypes.LoadRecipes:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.RecipesLoaded:
      return { ...state, ...action.payload, isAppLoading: false };
    case RecipesManagerActionTypes.LoadRecipeDetails:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.RecipeDetailsLoaded:
      return { ...state, ...action.payload, isAppLoading: false };
    case RecipesManagerActionTypes.ClearRecipeDetails:
      return { ...state, recipeDetails: null };
    case RecipesManagerActionTypes.ClearRecipesList:
      return { ...state, recipesList: null };
    default:
      return state;
  }
}
