import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';

import { ShoppingListAction, ShoppingListActionTypes } from './shopping-list.actions';

export const SHOPPINGLIST_FEATURE_KEY = 'shoppingList';

export interface ShoppingListState {
  shoppingListItems: ShoppingListItem[];
}

export const shoppingListInitialState: ShoppingListState = {
  shoppingListItems: []
};

export function shoppingListReducer(
  state: ShoppingListState = shoppingListInitialState,
  action: ShoppingListAction): ShoppingListState {
  switch (action.type) {
    case ShoppingListActionTypes.ShoppingListItemsLoaded:
      return { ...state, ...action.payload };
    case ShoppingListActionTypes.ClearShoppingListState:
      return shoppingListInitialState;
    default:
      return state;
  }
}
