import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShoppingListItemRequest } from 'src/app/core/models/shopping-list-item-request';

import {
  AddItemToShoppingList,
  ClearShoppingListState,
  DeleteShoppingListItem,
  LoadShoppingListItems,
  ShoppingListActionTypes,
} from './shopping-list.actions';
import { ShoppingListState } from './shopping-list.reducer';
import { shoppingListQuery } from './shopping-list.selectors';

@Injectable()
export class ShoppingListFacade {

  shoppingListItems = this.store.pipe(select(shoppingListQuery.getShoppingList));

  constructor(private store: Store<ShoppingListState>) { }

  public loadShoppingListItems(): void {
    this.store.dispatch<LoadShoppingListItems>({
      type: ShoppingListActionTypes.LoadShoppingListItems
    });
  }

  public addItemToShoppingList(item: ShoppingListItemRequest): void {
    this.store.dispatch<AddItemToShoppingList>({
      type: ShoppingListActionTypes.AddItemToShoppingList,
      payload: {
        shoppingListItem: item
      }
    });
  }

  public deleteShoppingListItem(itemId: number): void {
    this.store.dispatch<DeleteShoppingListItem>({
      type: ShoppingListActionTypes.DeleteShoppingListItem,
      payload: {
        id: itemId
      }
    });
  }

  public clearShoppingListState(): void {
    this.store.dispatch<ClearShoppingListState>({
      type: ShoppingListActionTypes.ClearShoppingListState
    });
  }

}
