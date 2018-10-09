import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';

export interface RecipesManagerState {
  readonly isAppLoading: boolean;
  readonly user: RecipesManagerUser;
  readonly recipesList: RecipesListItem[];
  readonly recipeDetails: Recipe;
}
