import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ClearRecipeDetails,
  LoadRecipeDetails,
  RecipesManagerActionTypes,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { Ingredient } from 'src/app/core/models/ingredient';
import { StoreUtil } from 'src/app/core/utils/store.util';

import { UnsubscribingOnDestroy } from '../core/utils/unsubscribing-on-destroy';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent extends UnsubscribingOnDestroy implements OnInit, OnDestroy {
  public recipeName: Observable<string>;
  public recipeImageUrl: Observable<string>;
  public recipeDifficultyLevel: Observable<DifficultyLevel>;
  public recipeTime: Observable<number>;
  public isVege: Observable<boolean>;
  public recipeIngredients: Observable<Ingredient[]>;
  public recipeDescription: Observable<string>;
  public recipePortions: Observable<number>;

  constructor(private store: Store<RecipesManagerState>,
    private route: ActivatedRoute) {
    super();
    this.recipeName = StoreUtil.select(this.store, FromRecipesManagerState.recipeName);
    this.recipeImageUrl = StoreUtil.select(this.store, FromRecipesManagerState.recipeImageUrl);
    this.recipeDifficultyLevel = StoreUtil.select(this.store, FromRecipesManagerState.recipeDifficultyLevel);
    this.recipeTime = StoreUtil.select(this.store, FromRecipesManagerState.recipeTime);
    this.isVege = StoreUtil.select(this.store, FromRecipesManagerState.recipeIsVege);
    this.recipeIngredients = StoreUtil.select(this.store, FromRecipesManagerState.recipeIngredients);
    this.recipeDescription = StoreUtil.select(this.store, FromRecipesManagerState.recipeDescription);
    this.recipePortions = StoreUtil.select(this.store, FromRecipesManagerState.recipePortions);
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((pmap) => {
        this.store.dispatch<LoadRecipeDetails>({
          type: RecipesManagerActionTypes.LoadRecipeDetails,
          payload: {
            id: +pmap.get('id')
          }
        });
      });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearRecipeDetails>({
      type: RecipesManagerActionTypes.ClearRecipeDetails
    });
    super.ngOnDestroy();
  }

}
