import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipesManagerActionTypes } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { LoadRecipes } from './core/+state/recipes-manager.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<RecipesManagerState>) {
  }

  ngOnInit() {
    this.store.dispatch<LoadRecipes>({
      type: RecipesManagerActionTypes.LoadRecipes
    });
  }
}
