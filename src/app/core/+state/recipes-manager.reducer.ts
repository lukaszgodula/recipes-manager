import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { RecipesManagerActions, RecipesManagerActionTypes } from './recipes-manager.actions';

export function recipesManagerReducer(state: RecipesManagerState, action: RecipesManagerActions): RecipesManagerState {
  switch (action.type) {
    case RecipesManagerActionTypes.LoadRecipes:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.RecipesLoaded:
      return { ...state, ...action.payload, isAppLoading: false };
    case RecipesManagerActionTypes.IngredientsLoaded:
      return { ...state, ...action.payload };
    case RecipesManagerActionTypes.LoadRecipeDetails:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.RecipeDetailsLoaded:
      return { ...state, ...action.payload, isAppLoading: false };
    case RecipesManagerActionTypes.AddRecipe:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.SaveEditedRecipe:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.DeleteRecipe:
      return { ...state, isAppLoading: true };
    case RecipesManagerActionTypes.ChangeLoginStatus:
      return { ...state, ...action.payload, isAppLoading: false, authInProgress: false };
    case RecipesManagerActionTypes.SetAppLoadingFlag:
      return { ...state, ...action.payload };
    case RecipesManagerActionTypes.SetAuthProgress:
      return { ...state, ...action.payload };
    case RecipesManagerActionTypes.ClearRecipeDetails:
      return { ...state, recipeDetails: null };
    case RecipesManagerActionTypes.ClearRecipesList:
      return { ...state, recipesList: null };
    case RecipesManagerActionTypes.ClearIngredientsList:
      return { ...state, ingredientsList: [] };
    case RecipesManagerActionTypes.ThrowHttpError:
      return { ...state, isAppLoading: false };
    case RecipesManagerActionTypes.SetNetworkStatus:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
