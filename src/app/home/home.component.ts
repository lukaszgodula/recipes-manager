import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { StoreUtil } from 'src/app/core/utils/store.util';

import { RecipesListItem } from '../core/models/recipes-list';

@Component({
  selector: 'recipes-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isAppLoading: Observable<boolean>;
  public recipesListItems: Observable<RecipesListItem[]>;

  constructor(private router: Router,
    private store: Store<RecipesManagerState>) {
    this.isAppLoading = StoreUtil.select(this.store, FromRecipesManagerState.isAppLoading);
    this.recipesListItems = StoreUtil.select(this.store, FromRecipesManagerState.recipesList);
  }

  ngOnInit() {
  }

  public navigateToAddRecipe(): void {
    this.router.navigate(['add']);
  }

}
