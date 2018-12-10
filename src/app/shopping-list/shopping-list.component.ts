import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingListItem } from '../core/models/shopping-list-item';
import { ShoppingListFacade } from './+state/shopping-list.facade';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public shoppingList: Observable<ShoppingListItem[]>;

  constructor(private shoppingListFacade: ShoppingListFacade) {
    this.shoppingList = this.shoppingListFacade.shoppingListItems;
  }

  ngOnInit() {
    this.shoppingListFacade.loadShoppingListItems();
  }

  ngOnDestroy() {
    this.shoppingListFacade.clearShoppingListState();
  }

  public deleteShoppingListItem(id: number): void {
    this.shoppingListFacade.deleteShoppingListItem(id);
  }

}
