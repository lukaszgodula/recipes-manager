import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { AddEditRecipeService } from 'src/app/core/services/add-edit-recipe.service';

import { IngredientListItem } from '../core/models/ingredient-list-item';
import { RecipesManagerService } from '../core/services/recipes-manager.service';
import { AddIngredientDialogComponent } from './../add-ingredient-dialog/add-ingredient-dialog.component';
import { AddRecipeForm } from './../core/models/add-recipe-form';
import { AddRecipeRequest } from './../core/models/add-recipe-request';
import { StoreUtil } from './../core/utils/store.util';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  public ingredientsListItems: Observable<IngredientListItem[]>;

  @ViewChild(AddRecipeFormComponent) addRecipeFormComponent: AddRecipeFormComponent;

  constructor(private router: Router,
    private store: Store<RecipesManagerState>,
    private dialog: MatDialog,
    private addEditRecipeService: AddEditRecipeService,
    private recipesManagerService: RecipesManagerService) {
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

  public openAddIngredientDialog(): void {
    this.dialog.open(AddIngredientDialogComponent);
  }

  public addRecipe(recipeFormValues: AddRecipeForm): void {
    const recipeRequest: AddRecipeRequest = this.addEditRecipeService.createAddRecipeRequest(recipeFormValues);

    this.store.dispatch<AddRecipe>({
      type: RecipesManagerActionTypes.AddRecipe,
      payload: {
        recipe: recipeRequest
      }
    });
  }

  public canDeactivate(): Observable<boolean> | boolean {
    if (!this.addRecipeFormComponent.addRecipeForm.dirty && this.addRecipeFormComponent.recipeIngredients.length === 0) {
      return true;
    }
    return this.recipesManagerService.confirmExit('You have unsaved changes, are you sure to discard them?');
  }

}
