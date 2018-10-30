import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddIngredientDialogComponent } from 'src/app/add-ingredient-dialog/add-ingredient-dialog.component';
import {
  ClearRecipeDetails,
  LoadIngredients,
  RecipesManagerActionTypes,
  SaveEditedRecipe,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { RecipeCategory } from 'src/app/core/enums/recipe-category.enum';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';
import { StoreUtil } from 'src/app/core/utils/store.util';
import { UnsubscribingOnDestroy } from 'src/app/core/utils/unsubscribing-on-destroy';

import { AddRecipeForm } from './../core/models/add-recipe-form';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent extends UnsubscribingOnDestroy implements OnInit, OnDestroy {
  public recipeId: Observable<number>;
  public recipeName: Observable<string>;
  public recipeCuisineType: Observable<CuisineType>;
  public recipeImageUrl: Observable<string>;
  public recipeDifficultyLevel: Observable<DifficultyLevel>;
  public recipeTime: Observable<number>;
  public isVege: Observable<boolean>;
  public recipeIngredients: Observable<Ingredient[]>;
  public recipeDescription: Observable<string>;
  public recipePortions: Observable<number>;
  public recipeCategory: Observable<RecipeCategory>;
  public ingredientsListItems: Observable<IngredientListItem[]>;

  constructor(private route: ActivatedRoute,
    private store: Store<RecipesManagerState>,
    private recipesManagerService: RecipesManagerService,
    private router: Router,
    private dialog: MatDialog) {
    super();
    this.recipeId = StoreUtil.select(this.store, FromRecipesManagerState.recipeId);
    this.recipeName = StoreUtil.select(this.store, FromRecipesManagerState.recipeName);
    this.recipeCuisineType = StoreUtil.select(this.store, FromRecipesManagerState.recipeCuisineType);
    this.recipeImageUrl = StoreUtil.select(this.store, FromRecipesManagerState.recipeImageUrl);
    this.recipeDifficultyLevel = StoreUtil.select(this.store, FromRecipesManagerState.recipeDifficultyLevel);
    this.recipeTime = StoreUtil.select(this.store, FromRecipesManagerState.recipeTime);
    this.isVege = StoreUtil.select(this.store, FromRecipesManagerState.recipeIsVege);
    this.recipeIngredients = StoreUtil.select(this.store, FromRecipesManagerState.recipeIngredients);
    this.recipeDescription = StoreUtil.select(this.store, FromRecipesManagerState.recipeDescription);
    this.recipePortions = StoreUtil.select(this.store, FromRecipesManagerState.recipePortions);
    this.recipeCategory = StoreUtil.select(this.store, FromRecipesManagerState.recipeCategory);
    this.ingredientsListItems = StoreUtil.select(this.store, FromRecipesManagerState.ingredientsList);
  }

  ngOnInit() {
    this.getRouteParams();
    this.store.dispatch<LoadIngredients>({
      type: RecipesManagerActionTypes.LoadIngredients
    });
  }

  ngOnDestroy() {
    this.store.dispatch<ClearRecipeDetails>({
      type: RecipesManagerActionTypes.ClearRecipeDetails
    });
    super.ngOnDestroy();
  }

  public navigateToList(): void {
    this.router.navigate(['../']);
  }

  public openAddIngredientDialog(): void {
    this.dialog.open(AddIngredientDialogComponent);
  }

  public saveEditedRecipe(recipe: AddRecipeForm): void {
    this.store.dispatch<SaveEditedRecipe>({
      type: RecipesManagerActionTypes.SaveEditedRecipe,
      payload: {
        recipe: recipe
      }
    });
  }

  private getRouteParams() {
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((pmap) => {
        this.recipesManagerService.dispatchLoadRecipes(pmap);
      });
  }
}
