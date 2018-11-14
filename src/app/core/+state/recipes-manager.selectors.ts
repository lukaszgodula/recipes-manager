import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecipesManagerState } from './recipes-manager.interfaces';

export class FromRecipesManagerState {
    public static readonly self = createFeatureSelector<RecipesManagerState>('recipesManager');

    public static readonly user = createSelector(FromRecipesManagerState.self, state => {
        return state && state.user ? state.user : null;
    });
    public static readonly isAuthInProgress = createSelector(FromRecipesManagerState.self, state => {
        return state && state.authInProgress ? state.authInProgress : false;
    });
    public static readonly isUserLoggedIn = createSelector(FromRecipesManagerState.self, state => {
        return state && state.user ? true : false;
    });
    public static readonly isAppLoading = createSelector(FromRecipesManagerState.self, state => {
        return state && state.isAppLoading ? state.isAppLoading : false;
    });
    public static readonly recipesList = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipesList ? state.recipesList : [];
    });
    public static readonly ingredientsList = createSelector(FromRecipesManagerState.self, state => {
        return state && state.ingredientsList ? state.ingredientsList : [];
    });
    public static readonly recipeDetails = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails ? state.recipeDetails : null;
    });
    public static readonly recipeId = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.id ? state.recipeDetails.id : null;
    });
    public static readonly recipeName = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.name ? state.recipeDetails.name : '';
    });
    public static readonly recipeCuisineType = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.cuisine ? state.recipeDetails.cuisine : null;
    });
    public static readonly recipePortions = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.portions ? state.recipeDetails.portions : null;
    });
    public static readonly recipeCategory = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.category ? state.recipeDetails.category : null;
    });
    public static readonly recipeImageUrl = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.imageUrl ? state.recipeDetails.imageUrl : '';
    });
    public static readonly recipeDifficultyLevel = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.level ? state.recipeDetails.level : null;
    });
    public static readonly recipeTime = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.time ? state.recipeDetails.time : 0;
    });
    public static readonly recipeIsVege = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.isVege ? state.recipeDetails.isVege : false;
    });
    public static readonly recipeIngredients = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.ingredientsList ? state.recipeDetails.ingredientsList : [];
    });
    public static readonly recipeDescription = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.description ? state.recipeDetails.description : '';
    });
    public static readonly isUserOnline = createSelector(FromRecipesManagerState.self, state => {
        return state && state.isUserOnline ? state.isUserOnline : null;
    });
}
