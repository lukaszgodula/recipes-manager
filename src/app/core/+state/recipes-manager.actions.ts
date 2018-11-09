import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';

import { EditIngredientRequest } from '../models/edit-ingredient-request';
import { IngredientListItem } from '../models/ingredient-list-item';
import { AddIngredientRequest } from './../models/add-ingredient-request';
import { AddRecipeRequest } from './../models/add-recipe-request';
import { EditRecipeRequest } from './../models/edit-recipe-request';

export enum RecipesManagerActionTypes {
  LoadRecipes = '[RecipesManager] LOAD_RECIPES',
  RecipesLoaded = '[RecipesManager] RECIPES_LOADED',
  LoadRecipeDetails = '[RecipesManager] LOAD_RECIPE_DETAILS',
  RecipeDetailsLoaded = '[RecipesManager] RECIPE_DETAILS_LOADED',
  ClearRecipeDetails = '[RecipesManager] CLEAR_RECIPE_DETAILS',
  ClearRecipesList = '[RecipesManager] CLEAR_RECIPES_LIST',
  ChangeLoginStatus = '[RecipesManager] CHANGE_LOGIN_STATUS',
  SetAppLoadingFlag = '[RecipesManager] SET_APP_LOADING_FLAG',
  ThrowAuthError = '[RecipesManager] THROW_AUTH_ERROR',
  SetAuthProgress = '[RecipesManager] SET_AUTH_PROGRESS',
  LoadIngredients = '[RecipesManager] LOAD_INGREDIENTS',
  IngredientsLoaded = '[RecipesManager] INGREDIENTS_LOADED',
  AddRecipe = '[RecipesManager] ADD_RECIPE',
  RecipeAdded = '[RecipesManager] RECIPE_ADDED',
  ClearIngredientsList = '[RecipesManager] CLEAR_INGREDIENTS_LIST',
  AddIngredient = '[RecipesManager] ADD_INGREDIENT',
  IngredientAdded = '[RecipesManager] INGREDIENT_ADDED',
  DeleteRecipe = '[RecipesManager] DELETE_RECIPE',
  RecipeDeleted = '[RecipesManager] RECIPE_DELETED',
  SaveEditedRecipe = '[RecipesManager] SAVE_EDITED_RECIPE',
  EditedRecipeSaved = '[RecipesManager] EDITED_RECIPE_SAVED',
  DeleteIngredient = '[RecipesManager] DELETE_INGREDIENT',
  IngredientDeleted = '[RecipesManager] INGREDIENT_DELETED',
  EditIngredient = '[RecipesManager] EDIT_INGREDIENT',
  IngredientEdited = '[RecipesManager] INGREDIENT_EDITED',
  ThrowHttpError = '[RecipesManager] THROW_HTTP_ERROR'
}

export interface SetAuthProgress {
  type: RecipesManagerActionTypes.SetAuthProgress;
  payload: {
    authInProgress: boolean;
  };
}

export interface ThrowAuthError {
  type: RecipesManagerActionTypes.ThrowAuthError;
  payload: {
    errorMessage: string;
  };
}

export interface ThrowHttpError {
  type: RecipesManagerActionTypes.ThrowHttpError;
  payload: {
    errorMessage: string;
  };
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

export interface LoadIngredients {
  type: RecipesManagerActionTypes.LoadIngredients;
}

export interface IngredientsLoaded {
  type: RecipesManagerActionTypes.IngredientsLoaded;
  payload: {
    ingredients: IngredientListItem[]
  };
}

export interface AddRecipe {
  type: RecipesManagerActionTypes.AddRecipe;
  payload: {
    recipe: AddRecipeRequest
  };
}

export interface RecipeAdded {
  type: RecipesManagerActionTypes.RecipeAdded;
}

export interface AddIngredient {
  type: RecipesManagerActionTypes.AddIngredient;
  payload: {
    ingredient: AddIngredientRequest;
  };
}

export interface IngredientAdded {
  type: RecipesManagerActionTypes.IngredientAdded;
}

export interface DeleteRecipe {
  type: RecipesManagerActionTypes.DeleteRecipe;
  payload: {
    recipeId: number;
  };
}

export interface SaveEditedRecipe {
  type: RecipesManagerActionTypes.SaveEditedRecipe;
  payload: {
    recipe: EditRecipeRequest
  };
}

export interface EditedRecipeSaved {
  type: RecipesManagerActionTypes.EditedRecipeSaved;
}

export interface RecipeDeleted {
  type: RecipesManagerActionTypes.RecipeDeleted;
}

export interface DeleteIngredient {
  type: RecipesManagerActionTypes.DeleteIngredient;
  payload: {
    ingredientId: number;
  };
}

export interface IngredientDeleted {
  type: RecipesManagerActionTypes.IngredientDeleted;
}

export interface EditIngredient {
  type: RecipesManagerActionTypes.EditIngredient;
  payload: {
    ingredient: EditIngredientRequest;
  };
}

export interface IngredientEdited {
  type: RecipesManagerActionTypes.IngredientEdited;
}

export interface ClearIngredientsList {
  type: RecipesManagerActionTypes.ClearIngredientsList;
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
  SetAppLoadingFlag |
  ThrowAuthError |
  SetAuthProgress |
  LoadIngredients |
  IngredientsLoaded |
  AddRecipe |
  RecipeAdded |
  ClearIngredientsList |
  AddIngredient |
  IngredientAdded |
  DeleteRecipe |
  RecipeDeleted |
  SaveEditedRecipe |
  EditedRecipeSaved |
  DeleteIngredient |
  IngredientDeleted |
  EditIngredient |
  IngredientEdited |
  ThrowHttpError;
