import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddRecipe,
  ClearIngredientsList,
  LoadIngredients,
  RecipesManagerActionTypes,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';

import { IngredientListItem } from '../core/models/ingredient-list-item';
import { AddRecipeForm } from './../core/models/add-recipe-form';
import { AddRecipeRequest } from './../core/models/add-recipe-request';
import { StoreUtil } from './../core/utils/store.util';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  public ingredientsListItems: Observable<IngredientListItem[]>;

  constructor(private router: Router,
    private store: Store<RecipesManagerState>) {
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

  public navigateBack(): void {
    this.router.navigate(['../']);
  }

  public addRecipe(recipeFormValues: AddRecipeForm): void {
    const recipeRequest: AddRecipeRequest = {
      name: recipeFormValues.name,
      cuisineType: recipeFormValues.cuisineType,
      time: recipeFormValues.time,
      difficultyLevel: recipeFormValues.difficultyLevel,
      description: recipeFormValues.description,
      imageUrl: recipeFormValues.imageUrl,
      portions: recipeFormValues.portions,
      isVege: recipeFormValues.isVege,
      ingredients: recipeFormValues.ingredients
    };
    this.store.dispatch<AddRecipe>({
      type: RecipesManagerActionTypes.AddRecipe,
      payload: {
        recipe: recipeRequest
      }
    });
  }

}
