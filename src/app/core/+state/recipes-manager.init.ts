import { RecipesManagerState } from './recipes-manager.interfaces';

export const initialState: RecipesManagerState = {
    isAppLoading: false,
    authInProgress: false,
    user: null,
    recipesList: [],
    recipeDetails: null
};
