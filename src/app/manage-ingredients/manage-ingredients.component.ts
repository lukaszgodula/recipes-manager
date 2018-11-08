import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import {
  ClearIngredientsList,
  DeleteIngredient,
  LoadIngredients,
  RecipesManagerActionTypes,
} from '../core/+state/recipes-manager.actions';
import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from '../core/+state/recipes-manager.selectors';
import { IngredientListItem } from '../core/models/ingredient-list-item';
import { StoreUtil } from '../core/utils/store.util';
import { UnsubscribingOnDestroy } from '../core/utils/unsubscribing-on-destroy';
import { DeleteDialogComponent, DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import { IngredientsListTableComponent } from './ingredients-list-table/ingredients-list-table.component';

@Component({
  selector: 'manage-ingredients',
  templateUrl: './manage-ingredients.component.html',
  styleUrls: ['./manage-ingredients.component.scss']
})
export class ManageIngredientsComponent extends UnsubscribingOnDestroy implements OnInit, OnDestroy {
  public ingredientsListItems: Observable<IngredientListItem[]>;

  @ViewChild(IngredientsListTableComponent) ingredientsListTableComponent: IngredientsListTableComponent;

  constructor(private store: Store<RecipesManagerState>,
    private dialog: MatDialog) {
    super();
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

  public deleteIngredient(ingredient: IngredientListItem): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        deleteItemName: ingredient.name,
        deleteItemId: ingredient.id
      }
    });

    dialogRef.afterClosed()
      .pipe(filter(v => v), takeUntil(this.ngUnsubscribe))
      .subscribe((itemToDelete: DeleteDialogData) => {
        this.store.dispatch<DeleteIngredient>({
          type: RecipesManagerActionTypes.DeleteIngredient,
          payload: {
            ingredientId: itemToDelete.deleteItemId
          }
        });
      });
  }

}
