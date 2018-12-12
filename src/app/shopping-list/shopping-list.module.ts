import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ShoppingListEffects } from './+state/shopping-list.effects';
import { SHOPPINGLIST_FEATURE_KEY, shoppingListInitialState, shoppingListReducer } from './+state/shopping-list.reducer';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListViewComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature(SHOPPINGLIST_FEATURE_KEY, shoppingListReducer, { initialState: shoppingListInitialState }),
    EffectsModule.forFeature([ShoppingListEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: []
})
export class ShoppingListModule { }
