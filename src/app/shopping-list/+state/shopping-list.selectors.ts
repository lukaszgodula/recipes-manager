import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SHOPPINGLIST_FEATURE_KEY, ShoppingListState } from './shopping-list.reducer';

const getShoppingListState = createFeatureSelector<ShoppingListState>(SHOPPINGLIST_FEATURE_KEY);

const getShoppingList = createSelector(getShoppingListState, state => {
  return state && state.shoppingListItems ? state.shoppingListItems : [];
});

const getShoppingListLoading = createSelector(getShoppingListState, state => {
  return state && state.shoppingListLoading ? state.shoppingListLoading : false;
});

export const shoppingListQuery = {
  getShoppingList,
  getShoppingListLoading
};
