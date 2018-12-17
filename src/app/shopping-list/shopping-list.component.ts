import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ShoppingListItem } from '../core/models/shopping-list-item';
import { ShoppingListItemRequest } from '../core/models/shopping-list-item-request';
import { ShoppingListFacade } from './+state/shopping-list.facade';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public shoppingList: Observable<ShoppingListItem[]>;

  public addItemForm: FormGroup;

  constructor(private shoppingListFacade: ShoppingListFacade,
    private formBuilder: FormBuilder) {
    this.buildForm();
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

  public addItemToList(): void {
    const shoppingListItemRequest: ShoppingListItemRequest = {
      ingredientName: this.addItemForm.value.itemName,
      ingredientQuantity: this.addItemForm.value.itemQuantity,
      ingredientUnit: this.addItemForm.value.itemUnit
    };
    this.shoppingListFacade.addItemToShoppingList(shoppingListItemRequest);
    this.addItemForm.reset();
  }

  private buildForm(): void {
    this.addItemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemQuantity: [null],
      itemUnit: [null]
    });
  }

}
