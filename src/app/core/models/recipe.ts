import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { Ingredient } from 'src/app/core/models/ingredient';

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
}
