import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SHOPPINGLIST_FEATURE_KEY, initialState as shoppingListInitialState, shoppingListReducer } from './+state/shopping-list.reducer';
import { ShoppingListEffects } from './+state/shopping-list.effects';
import { ShoppingListFacade } from './+state/shopping-list.facade';

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    StoreModule.forFeature(SHOPPINGLIST_FEATURE_KEY, shoppingListReducer, { initialState: shoppingListInitialState }),
    EffectsModule.forFeature([ShoppingListEffects])
  ],
  providers: [ShoppingListFacade]
})
export class ShoppingListModule { }
