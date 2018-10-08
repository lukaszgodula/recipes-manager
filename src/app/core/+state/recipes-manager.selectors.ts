import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecipesManagerState } from './recipes-manager.interfaces';

export class FromRecipesManagerState {
    public static readonly self = createFeatureSelector<RecipesManagerState>('recipesManager');

    public static readonly recipesList = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipesList ? state.recipesList : [];
    });
    public static readonly recipeDetails = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails ? state.recipeDetails : null;
    });
    public static readonly recipeName = createSelector(FromRecipesManagerState.self, state => {
        return state && state.recipeDetails && state.recipeDetails.name ? state.recipeDetails.name : '';
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
}
