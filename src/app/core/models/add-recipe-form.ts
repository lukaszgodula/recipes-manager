import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from './../enums/difficulty-level.enum';
import { RecipeCategory } from './../enums/recipe-category.enum';
import { FormIngredient } from './form-ingredient';

export interface AddRecipeForm {
  cuisineType: CuisineType;
  description: string;
  difficultyLevel: DifficultyLevel;
  imageUrl: string;
  ingredients: FormIngredient[];
  isVege: boolean;
  name: string;
  portions: number;
  time: number;
  category: RecipeCategory;
}
