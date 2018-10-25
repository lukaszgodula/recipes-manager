import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from '../enums/difficulty-level.enum';

export interface AddRecipeRequest {
  name: string;
  userId: string;
  cuisineType: CuisineType;
  time: number;
  difficultyLevel: DifficultyLevel;
  description: string;
  imageUrl: string;
  portions: number;
  isVege: boolean;
  ingredients: AddRecipeIngredient[];
}

interface AddRecipeIngredient {
  ingredientId: number;
  quantity: number;
}
