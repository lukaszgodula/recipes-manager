import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListViewComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: []
})
export class ShoppingListModule { }
