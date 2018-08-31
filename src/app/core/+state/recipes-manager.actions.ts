import { RecipesListItem } from 'src/app/core/models/recipes-list';

export enum RecipesManagerActionTypes {
  LoadRecipes = '[RecipesManager] LOAD_RECIPES',
  RecipesLoaded = '[RecipesManager] RECIPES_LOADED'
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

export type RecipesManagerActions = LoadRecipes | RecipesLoaded;
