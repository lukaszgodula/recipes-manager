import { RecipesManagerState } from './recipes-manager.interfaces';

export const initialState: RecipesManagerState = {
    isAppLoading: false,
    user: null,
    recipesList: [],
    recipeDetails: null
};
