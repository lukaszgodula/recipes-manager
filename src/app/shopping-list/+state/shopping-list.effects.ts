import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';
import { RecipesRepository } from 'src/app/core/recipes.repository';

import { AddItemToShoppingList, DeleteShoppingListItem, ShoppingListActionTypes } from './shopping-list.actions';

@Injectable()
export class ShoppingListEffects {

  @Effect()
  loadShoppingListItems: Observable<Action> = this.actions.pipe(
    ofType(ShoppingListActionTypes.LoadShoppingListItems),
    switchMap(() => {
      return this.recipesRepository.getShoppingListItems().pipe(
        concatMap((shoppingListItems: ShoppingListItem[]) => {
          return [
            {
              type: ShoppingListActionTypes.ShoppingListItemsLoaded,
              payload: { shoppingListItems: shoppingListItems }
            }
          ];
        })
      );
    })
  );

  @Effect()
  addItemToShoppingList: Observable<Action> = this.actions.pipe(
    ofType(ShoppingListActionTypes.AddItemToShoppingList),
    switchMap((action: AddItemToShoppingList) => {
      return this.recipesRepository.addShoppingListItem(action.payload.shoppingListItem).pipe(
        concatMap((shoppingListItem: ShoppingListItem) => {
          return [
            {
              type: ShoppingListActionTypes.ItemAddedToShoppingList,
              payload: { shoppingListItem: shoppingListItem }
            }
          ];
        })
      );
    })
  );

  @Effect()
  deleteShoppingListItem: Observable<Action> = this.actions.pipe(
    ofType(ShoppingListActionTypes.DeleteShoppingListItem),
    switchMap((action: DeleteShoppingListItem) => {
      return this.recipesRepository.deleteShoppingListItem(action.payload.id).pipe(
        concatMap(() => {
          return [
            {
              type: ShoppingListActionTypes.ShoppingListItemDeleted
            }
          ];
        })
      );
    })
  );

  constructor(
    private actions: Actions,
    private recipesRepository: RecipesRepository
  ) { }
}
