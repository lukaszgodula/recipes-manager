import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';
import { ShoppingListItemRequest } from 'src/app/core/models/shopping-list-item-request';

export enum ShoppingListActionTypes {
  AddItemToShoppingList = '[ShoppingList] ADD_ITEM_TO_SHOPPING_LIST',
  ItemAddedToShoppingList = '[ShoppingList] ITEM_ADDED_TO_SHOPPING_LIST',
  LoadShoppingListItems = '[ShoppingList] LOAD_SHOPPING_LIST_ITEMS',
  ShoppingListItemsLoaded = '[ShoppingList] SHOPPING_LIST_ITEMS_LOADED',
  DeleteShoppingListItem = '[ShoppingList] DELETE_SHOPPING_LIST_ITEM',
  ShoppingListItemDeleted = '[ShoppingList] SHOPPING_LIST_ITEM_DELETED',
  ClearShoppingListState = '[ShoppingList] CLEAR_SHOPPING_LIST_STATE'
}

export interface LoadShoppingListItems {
  type: ShoppingListActionTypes.LoadShoppingListItems;
}

export interface ShoppingListItemsLoaded {
  type: ShoppingListActionTypes.ShoppingListItemsLoaded;
  payload: {
    shoppingListItems: ShoppingListItem[]
  };
}

export interface AddItemToShoppingList {
  type: ShoppingListActionTypes.AddItemToShoppingList;
  payload: {
    shoppingListItem: ShoppingListItemRequest
  };
}

export interface ItemAddedToShoppingList {
  type: ShoppingListActionTypes.ItemAddedToShoppingList;
  payload: {
    shoppingListItem: ShoppingListItem
  };
}

export interface DeleteShoppingListItem {
  type: ShoppingListActionTypes.DeleteShoppingListItem;
  payload: {
    id: number
  };
}

export interface ShoppingListItemDeleted {
  type: ShoppingListActionTypes.ShoppingListItemDeleted;
}

export interface ClearShoppingListState {
  type: ShoppingListActionTypes.ClearShoppingListState;
}

export type ShoppingListAction = LoadShoppingListItems |
  ShoppingListItemsLoaded |
  AddItemToShoppingList |
  ItemAddedToShoppingList |
  DeleteShoppingListItem |
  ShoppingListItemDeleted |
  ClearShoppingListState;
