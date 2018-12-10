import { Component, OnInit } from '@angular/core';

import { ShoppingListFacade } from './+state/shopping-list.facade';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListFacade: ShoppingListFacade) { }

  ngOnInit() {
    this.shoppingListFacade.loadShoppingListItems();
  }

}
