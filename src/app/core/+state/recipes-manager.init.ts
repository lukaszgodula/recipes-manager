import { RecipesManagerState } from './recipes-manager.interfaces';

export const initialState: RecipesManagerState = {
    isAppLoading: false,
    recipesList: [],
    recipeDetails: null
};
