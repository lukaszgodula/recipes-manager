import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  ClearRecipeDetails,
  LoadRecipeDetails,
  RecipesManagerActionTypes,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<RecipesManagerState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch<LoadRecipeDetails>({
      type: RecipesManagerActionTypes.LoadRecipeDetails,
      payload: {
        id: +this.route.snapshot.paramMap.get('id')
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearRecipeDetails>({
      type: RecipesManagerActionTypes.ClearRecipeDetails
    });
  }

}
