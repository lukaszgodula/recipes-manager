import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';

import { ShoppingListAction, ShoppingListActionTypes } from './shopping-list.actions';

export const SHOPPINGLIST_FEATURE_KEY = 'shoppingList';

export interface ShoppingListState {
  shoppingListItems: ShoppingListItem[];
  shoppingListLoading: boolean;
}

export const shoppingListInitialState: ShoppingListState = {
  shoppingListItems: [],
  shoppingListLoading: false
};

export function shoppingListReducer(
  state: ShoppingListState = shoppingListInitialState,
  action: ShoppingListAction): ShoppingListState {
  switch (action.type) {
    case ShoppingListActionTypes.LoadShoppingListItems:
      return { ...state, shoppingListLoading: true };
    case ShoppingListActionTypes.ShoppingListItemsLoaded:
      return { ...state, ...action.payload, shoppingListLoading: false };
    case ShoppingListActionTypes.ClearShoppingListState:
      return shoppingListInitialState;
    default:
      return state;
  }
}
