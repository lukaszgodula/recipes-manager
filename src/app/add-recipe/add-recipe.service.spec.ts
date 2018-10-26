import { inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';

import { RecipeCategory } from '../core/enums/recipe-category.enum';
import { AddRecipeRequest } from '../core/models/add-recipe-request';
import { CuisineType } from './../core/enums/cuisine-type.enum';
import { DifficultyLevel } from './../core/enums/difficulty-level.enum';
import { FormIngredient } from './../core/models/form-ingredient';
import { AddRecipeService } from './add-recipe.service';

describe('AddRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddRecipeService,
      FormBuilder
    ]
  }));

  it('should be created', inject([AddRecipeService], (addRecipeService: AddRecipeService) => {
    expect(addRecipeService).toBeTruthy();
  }));

  it('should remove ingredient from recipe ingredients list', inject([AddRecipeService], (addRecipeService: AddRecipeService) => {
    const ingredient: FormIngredient = {
      id: 2,
      quantity: 5
    };
    const ingredientsList: FormIngredient[] = [
      {
        id: 1,
        quantity: 2
      },
      {
        id: 2,
        quantity: 5
      },
      {
        id: 3,
        quantity: 10
      }
    ];
    const expectedIngredientsList: FormIngredient[] = [
      {
        id: 1,
        quantity: 2
      },
      {
        id: 3,
        quantity: 10
      }
    ];
    const splicedIngredientsList = addRecipeService.removeIngredientFromIngredientsList(ingredient, ingredientsList);
    expect(splicedIngredientsList).toEqual(expectedIngredientsList);
  }));

  it('should remove redundant ingredient info from ingredients objects', inject([AddRecipeService],
    (addRecipeService: AddRecipeService) => {
      const ingredientsList: FormIngredient[] = [
        {
          id: 1,
          quantity: 2,
          name: 'Test1',
          unit: 'ltr'
        },
        {
          id: 2,
          quantity: 5,
          name: 'Test2',
          unit: 'gram'
        },
        {
          id: 3,
          quantity: 10,
          name: 'Test3',
          unit: 'szt'
        }
      ];
      const expectedIngredientsList: FormIngredient[] = [
        {
          id: 1,
          quantity: 2
        },
        {
          id: 2,
          quantity: 5
        },
        {
          id: 3,
          quantity: 10
        }
      ];
      const mappedIngredientsList = addRecipeService.mapIngredientsToFormValue(ingredientsList);
      expect(mappedIngredientsList).toEqual(expectedIngredientsList);
    }));

  it('should create recipe ingredient item', inject([AddRecipeService, FormBuilder],
    (addRecipeService: AddRecipeService, formBuilder: FormBuilder) => {
      const ingredientsForm: FormGroup = formBuilder.group({
        ingredient: [{
          id: 1,
          name: 'Test1',
          unit: 'ltr'
        }, Validators.required],
        quantity: [10, Validators.required]
      });
      const createdRecipeIngredientItem = addRecipeService.createRecipeIngredientItem(ingredientsForm);
      const expectedRecipeIngredientItem: FormIngredient = {
        id: 1,
        name: 'Test1',
        unit: 'ltr',
        quantity: 10
      };
      expect(expectedRecipeIngredientItem).toEqual(createdRecipeIngredientItem);
    }));

  it('should create add recipe request', inject([AddRecipeService], (addRecipeService: AddRecipeService) => {
    const recipeFormValues: AddRecipeForm = {
      cuisineType: CuisineType.Polish,
      description: 'abc',
      difficultyLevel: DifficultyLevel.Easy,
      imageUrl: '',
      ingredients: [
        {
          id: 1,
          quantity: 5
        }
      ],
      isVege: false,
      name: 'Test',
      portions: 2,
      time: 15,
      category: RecipeCategory.Other
    };
    const expectedAddRecipeRequest: AddRecipeRequest = {
      cuisineType: CuisineType.Polish,
      description: 'abc',
      difficultyLevel: DifficultyLevel.Easy,
      imageUrl: '',
      ingredients: [
        {
          id: 1,
          quantity: 5
        }
      ],
      isVege: false,
      name: 'Test',
      portions: 2,
      time: 15,
      category: RecipeCategory.Other
    };
    const addRecipeRequest = addRecipeService.createAddRecipeRequest(recipeFormValues);
    expect(addRecipeRequest).toEqual(expectedAddRecipeRequest);
  }));
});
