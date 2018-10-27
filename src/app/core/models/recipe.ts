import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { Ingredient } from 'src/app/core/models/ingredient';

import { RecipeCategory } from '../enums/recipe-category.enum';

export interface Recipe {
    id: number;
    userId: number;
    name: string;
    description: string;
    imageUrl: string;
    ingredientsList: Ingredient[];
    time: number;
    cuisine: CuisineType;
    portions: number;
    level: DifficultyLevel;
    isVege: boolean;
    category: RecipeCategory;
}
