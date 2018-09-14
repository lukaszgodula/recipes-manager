import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipesListItems: Observable<RecipesListItem[]>;

  constructor(private store: Store<RecipesManagerState>) {
    this.recipesListItems = store.select('recipesManager', 'recipesList');
  }

  ngOnInit() {
  }

}
