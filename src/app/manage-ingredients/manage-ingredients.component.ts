import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClearIngredientsList, LoadIngredients, RecipesManagerActionTypes } from '../core/+state/recipes-manager.actions';
import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from '../core/+state/recipes-manager.selectors';
import { IngredientListItem } from '../core/models/ingredient-list-item';
import { StoreUtil } from '../core/utils/store.util';
import { IngredientsListTableComponent } from './ingredients-list-table/ingredients-list-table.component';

@Component({
  selector: 'manage-ingredients',
  templateUrl: './manage-ingredients.component.html',
  styleUrls: ['./manage-ingredients.component.scss']
})
export class ManageIngredientsComponent implements OnInit, OnDestroy {
  public ingredientsListItems: Observable<IngredientListItem[]>;

  @ViewChild(IngredientsListTableComponent) ingredientsListTableComponent: IngredientsListTableComponent;

  constructor(private store: Store<RecipesManagerState>) {
    this.ingredientsListItems = StoreUtil.select(this.store, FromRecipesManagerState.ingredientsList);
  }

  ngOnInit() {
    this.store.dispatch<LoadIngredients>({
      type: RecipesManagerActionTypes.LoadIngredients
    });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearIngredientsList>({
      type: RecipesManagerActionTypes.ClearIngredientsList
    });
  }

  public applyFilter(filterValue: string): void {
    this.ingredientsListTableComponent.applyFilter(filterValue);
  }

}
