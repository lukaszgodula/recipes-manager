import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';
import { FormIngredient } from 'src/app/core/models/form-ingredient';

import { AddRecipeRequest } from './../core/models/add-recipe-request';

@Injectable()
export class AddRecipeService {

  constructor(private formBuilder: FormBuilder) { }

  public createAddRecipeForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      cuisineType: ['', Validators.required],
      time: '',
      difficultyLevel: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: '',
      portions: '',
      isVege: '',
      description: '',
      ingredients: [[], Validators.required]
    });
  }

  public removeIngredientFromIngredientsList(ingredient: FormIngredient, recipeIngredients: FormIngredient[]): FormIngredient[] {
    const index: number = recipeIngredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      recipeIngredients.splice(index, 1);
    }
    return recipeIngredients;
  }

  public createRecipeIngredientItem(ingredientsForm: FormGroup): FormIngredient {
    return {
      id: ingredientsForm.value.ingredient.id,
      quantity: ingredientsForm.value.quantity,
      name: ingredientsForm.value.ingredient.name,
      unit: ingredientsForm.value.ingredient.unit
    };
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
}
