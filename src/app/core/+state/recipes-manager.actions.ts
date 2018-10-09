import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';

export enum RecipesManagerActionTypes {
  LoadRecipes = '[RecipesManager] LOAD_RECIPES',
  RecipesLoaded = '[RecipesManager] RECIPES_LOADED',
  LoadRecipeDetails = '[RecipesManager] LOAD_RECIPE_DETAILS',
  RecipeDetailsLoaded = '[RecipesManager] RECIPE_DETAILS_LOADED',
  ClearRecipeDetails = '[RecipesManager] CLEAR_RECIPE_DETAILS',
  ClearRecipesList = '[RecipesManager] CLEAR_RECIPES_LIST',
  ChangeLoginStatus = '[RecipesManager] CHANGE_LOGIN_STATUS',
  SetAppLoadingFlag = '[RecipesManager] SET_APP_LOADING_FLAG'
}

export interface LoadRecipes {
  type: RecipesManagerActionTypes.LoadRecipes;
}

export interface RecipesLoaded {
  type: RecipesManagerActionTypes.RecipesLoaded;
  payload: {
    recipesList: RecipesListItem[];
  };
}

export interface LoadRecipeDetails {
  type: RecipesManagerActionTypes.LoadRecipeDetails;
  payload: {
    id: number;
  };
}

export interface RecipeDetailsLoaded {
  type: RecipesManagerActionTypes.RecipeDetailsLoaded;
  payload: {
    recipeDetails: Recipe;
  };
}

export interface ChangeLoginStatus {
  type: RecipesManagerActionTypes.ChangeLoginStatus;
  payload: {
    user: RecipesManagerUser;
  };
}

export interface SetAppLoadingFlag {
  type: RecipesManagerActionTypes.SetAppLoadingFlag;
  payload: {
    isAppLoading: boolean;
  };
}

export interface ClearRecipeDetails {
  type: RecipesManagerActionTypes.ClearRecipeDetails;
}

export interface ClearRecipesList {
  type: RecipesManagerActionTypes.ClearRecipesList;
}

export type RecipesManagerActions =
  LoadRecipes |
  RecipesLoaded |
  LoadRecipeDetails |
  RecipeDetailsLoaded |
  ClearRecipeDetails |
  ClearRecipesList |
  ChangeLoginStatus |
  SetAppLoadingFlag;
