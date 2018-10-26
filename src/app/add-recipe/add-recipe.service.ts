import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormIngredient } from 'src/app/core/models/form-ingredient';

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

  public createAddIngreientToListForm(): FormGroup {
    return this.formBuilder.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  public removeIngredientFromIngredientsList(ingredient: FormIngredient, recipeIngredients: FormIngredient[]): FormIngredient[] {
    const index: number = recipeIngredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      recipeIngredients.splice(index, 1);
    }
    return recipeIngredients;
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
}
