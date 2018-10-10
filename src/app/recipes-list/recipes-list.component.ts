import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
  public isUserLoggedIn: Observable<boolean>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<RecipesManagerState>,
    private router: Router) {
    this.recipesListItems = StoreUtil.select(this.store, FromRecipesManagerState.recipesList);
    this.isUserLoggedIn = StoreUtil.select(this.store, FromRecipesManagerState.isUserLoggedIn);
  }

  ngOnInit() {
    this.isUserLoggedIn
      .pipe(filter(v => v !== false), takeUntil(this.unsubscribe))
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
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public navigateToDetails(recipeId: number): void {
    this.router.navigate([`/recipe/${recipeId}`]);
  }

}
