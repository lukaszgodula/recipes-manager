import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';

import { IngredientListItem } from '../models/ingredient-list-item';

export interface RecipesManagerState {
  readonly isAppLoading: boolean;
  readonly authInProgress: boolean;
  readonly user: RecipesManagerUser;
  readonly recipesList: RecipesListItem[];
  readonly recipeDetails: Recipe;
  readonly ingredientsList: IngredientListItem[];
  readonly isUserOnline: boolean;
}
