import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

export interface RecipesManagerState {
    readonly recipesList: RecipesListItem[];
    readonly recipeDetails: Recipe;
  }
