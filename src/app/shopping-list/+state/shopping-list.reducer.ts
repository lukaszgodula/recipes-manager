import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';

import { ShoppingListAction, ShoppingListActionTypes } from './shopping-list.actions';

export const SHOPPINGLIST_FEATURE_KEY = 'shoppingList';

export interface ShoppingListState {
  shoppingListItems: ShoppingListItem[];
}

export const initialState: ShoppingListState = {
  shoppingListItems: []
};

export function shoppingListReducer(
  state: ShoppingListState = initialState,
  action: ShoppingListAction): ShoppingListState {
  switch (action.type) {
    case ShoppingListActionTypes.ShoppingListItemsLoaded:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
