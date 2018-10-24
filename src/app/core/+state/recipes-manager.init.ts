import { RecipesManagerState } from './recipes-manager.interfaces';

export const initialState: RecipesManagerState = {
    isAppLoading: true,
    authInProgress: false,
    user: null,
    tokenId: null,
    recipesList: [],
    recipeDetails: null
};
