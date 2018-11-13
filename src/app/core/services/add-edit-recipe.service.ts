import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';
import { AddRecipeRequest } from 'src/app/core/models/add-recipe-request';
import { FormIngredient } from 'src/app/core/models/form-ingredient';
import { Ingredient } from 'src/app/core/models/ingredient';

import { EditRecipeRequest } from '../models/edit-recipe-request';
import { EditRecipeForm } from './../models/edit-recipe-form';

@Injectable()
export class AddEditRecipeService {

  constructor(private formBuilder: FormBuilder) { }

  public createAddIngreientToListForm(): FormGroup {
    return this.formBuilder.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  public mapIngredientsToFormValue(recipeIngredients: FormIngredient[]): FormIngredient[] {
    return recipeIngredients.map(i => ({ id: i.id, quantity: i.quantity }));
  }

  public createRecipeIngredientItem(ingredientsForm: FormGroup): FormIngredient {
    return {
      id: ingredientsForm.value.ingredient.id,
      quantity: ingredientsForm.value.quantity,
      name: ingredientsForm.value.ingredient.name,
      unit: ingredientsForm.value.ingredient.unit
    };
  }

  public removeIngredientFromIngredientsList(ingredient: FormIngredient, recipeIngredients: FormIngredient[]): FormIngredient[] {
    const index: number = recipeIngredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      recipeIngredients.splice(index, 1);
    }
    return recipeIngredients;
  }

  public createAddRecipeForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      cuisineType: ['', Validators.required],
      time: ['', Validators.min(0)],
      difficultyLevel: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: '',
      portions: ['', Validators.min(0)],
      isVege: '',
      description: '',
      ingredients: [[], Validators.required]
    });
  }

  public createAddRecipeRequest(recipeFormValues: AddRecipeForm): AddRecipeRequest {
    const recipeRequest: AddRecipeRequest = {
      name: recipeFormValues.name,
      cuisineType: recipeFormValues.cuisineType,
      time: recipeFormValues.time,
      difficultyLevel: recipeFormValues.difficultyLevel,
      description: recipeFormValues.description,
      imageUrl: recipeFormValues.imageUrl,
      portions: recipeFormValues.portions,
      isVege: recipeFormValues.isVege,
      ingredients: recipeFormValues.ingredients,
      category: recipeFormValues.category
    };
    return recipeRequest;
  }

  public createEditRecipeRequest(recipeFormValues: EditRecipeForm): EditRecipeRequest {
    const recipeRequest: EditRecipeRequest = {
      id: recipeFormValues.id,
      name: recipeFormValues.name,
      cuisineType: recipeFormValues.cuisineType,
      time: recipeFormValues.time,
      difficultyLevel: recipeFormValues.difficultyLevel,
      description: recipeFormValues.description,
      imageUrl: recipeFormValues.imageUrl,
      portions: recipeFormValues.portions,
      isVege: recipeFormValues.isVege,
      ingredients: recipeFormValues.ingredients,
      category: recipeFormValues.category
    };
    return recipeRequest;
  }

  public createEditRecipeForm(): FormGroup {
    return this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      cuisineType: ['', Validators.required],
      time: ['', Validators.min(0)],
      difficultyLevel: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: '',
      portions: ['', Validators.min(0)],
      isVege: '',
      description: '',
      ingredients: [[], Validators.required]
    });
  }

  public updateRecipeIngredientsChips(ingredients: Ingredient[]): FormIngredient[] {
    return ingredients.map(i => ({ id: i.id, quantity: i.quantity, name: i.name, unit: i.unit }));
  }
}
