import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import {
  ClearRecipesList,
  DeleteRecipe,
  LoadRecipes,
  RecipesManagerActionTypes,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { StoreUtil } from 'src/app/core/utils/store.util';

import { UnsubscribingOnDestroy } from '../core/utils/unsubscribing-on-destroy';
import { DeleteDialogComponent, DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import { RecipesListTableComponent } from './recipes-list-table/recipes-list-table.component';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent extends UnsubscribingOnDestroy implements OnInit, OnDestroy {
  public recipesListItems: Observable<RecipesListItem[]>;
  public isUserLoggedIn: Observable<boolean>;

  @ViewChild(RecipesListTableComponent) recipeListTableComponent: RecipesListTableComponent;

  constructor(private store: Store<RecipesManagerState>,
    private router: Router,
    private dialog: MatDialog,
  ) {
    super();
    this.recipesListItems = StoreUtil.select(this.store, FromRecipesManagerState.recipesList);
    this.isUserLoggedIn = StoreUtil.select(this.store, FromRecipesManagerState.isUserLoggedIn);
  }

  ngOnInit() {
    this.isUserLoggedIn
      .pipe(filter(v => v !== false), takeUntil(this.ngUnsubscribe))
      .subscribe((v) => {
        this.store.dispatch<LoadRecipes>({
          type: RecipesManagerActionTypes.LoadRecipes
        });
      });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearRecipesList>({
      type: RecipesManagerActionTypes.ClearRecipesList
    });
    super.ngOnDestroy();
  }

  public navigateToDetails(recipeId: number): void {
    this.router.navigate([`/recipe/${recipeId}`]);
  }

  public navigateToEdit(recipe: RecipesListItem): void {
    this.router.navigate([`/recipe/${recipe.id}/edit`]);
  }

  public deleteRecipe(recipe: RecipesListItem): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        deleteItemName: recipe.name,
        deleteItemId: recipe.id
      }
    });

    dialogRef.afterClosed()
      .pipe(filter(v => v), takeUntil(this.ngUnsubscribe))
      .subscribe((itemToDelete: DeleteDialogData) => {
        this.store.dispatch<DeleteRecipe>({
          type: RecipesManagerActionTypes.DeleteRecipe,
          payload: {
            recipeId: itemToDelete.deleteItemId
          }
        });
      });
  }

  public applyFilter(filterValue: string): void {
    this.recipeListTableComponent.applyFilter(filterValue);
  }

}
