import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

export const mockRecipesList: RecipesListItem[] =
[
  {
    id: 1,
    name: 'Jajecznica',
    cuisine: CuisineType.Polish,
    time: 90,
    level: DifficultyLevel.Easy
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    cuisine: CuisineType.Italian,
    time: 30,
    level: DifficultyLevel.Medium
  }
];
