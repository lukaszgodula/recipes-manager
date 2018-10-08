import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClearRecipesList, LoadRecipes, RecipesManagerActionTypes } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { StoreUtil } from 'src/app/core/utils/store.util';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  public recipesListItems: Observable<RecipesListItem[]>;

  constructor(private store: Store<RecipesManagerState>,
    private router: Router) {
    this.recipesListItems = StoreUtil.select(this.store, FromRecipesManagerState.recipesList);
  }

  ngOnInit() {
    this.store.dispatch<LoadRecipes>({
      type: RecipesManagerActionTypes.LoadRecipes
    });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearRecipesList>({
      type: RecipesManagerActionTypes.ClearRecipesList
    });
  }

  public navigateToDetails(recipeId: number): void {
    this.router.navigate([`/recipe/${recipeId}`]);
  }

}
