import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { StoreUtil } from 'src/app/core/utils/store.util';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipesListItems: Observable<RecipesListItem[]>;

  constructor(private store: Store<RecipesManagerState>) {
    this.recipesListItems = StoreUtil.select(this.store, FromRecipesManagerState.recipesList);
  }

  ngOnInit() {
  }

}
