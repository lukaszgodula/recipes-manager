import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';

import { RecipeCategory } from '../enums/recipe-category.enum';

export interface RecipesListItem {
    id: number;
    name: string;
    cuisine: CuisineType;
    time: number;
    category: RecipeCategory;
}
