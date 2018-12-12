import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';
import { RecipesRepository } from 'src/app/core/recipes.repository';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

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
          this.recipesManagerService.openSnackBar('Added to list!', 'Close', 1000);
          return [
            {
              type: ShoppingListActionTypes.ItemAddedToShoppingList,
              payload: { shoppingListItem: shoppingListItem }
            },
            {
              type: ShoppingListActionTypes.LoadShoppingListItems
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
            },
            {
              type: ShoppingListActionTypes.LoadShoppingListItems
            }
          ];
        })
      );
    })
  );

  constructor(
    private actions: Actions,
    private recipesRepository: RecipesRepository,
    private recipesManagerService: RecipesManagerService
  ) { }
}
