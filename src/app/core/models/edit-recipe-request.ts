import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from '../enums/difficulty-level.enum';
import { RecipeCategory } from '../enums/recipe-category.enum';
import { RequestRecipeIngredient } from './request-recipe-ingredient';

export interface EditRecipeRequest {
  name: string;
  cuisineType: CuisineType;
  time: number;
  difficultyLevel: DifficultyLevel;
  description: string;
  imageUrl: string;
  portions: number;
  isVege: boolean;
  ingredients: RequestRecipeIngredient[];
  category: RecipeCategory;
}
