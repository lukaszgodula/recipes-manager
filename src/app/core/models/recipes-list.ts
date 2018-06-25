import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';

export interface RecipesListItem {
    id: number;
    name: string;
    cuisine: CuisineType;
    time: number;
    level: DifficultyLevel;
}
