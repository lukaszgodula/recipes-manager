import { inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from '../enums/difficulty-level.enum';
import { RecipeCategory } from '../enums/recipe-category.enum';
import { AddRecipeForm } from '../models/add-recipe-form';
import { AddRecipeRequest } from '../models/add-recipe-request';
import { EditRecipeForm } from '../models/edit-recipe-form';
import { EditRecipeRequest } from '../models/edit-recipe-request';
import { FormIngredient } from '../models/form-ingredient';
import { Ingredient } from '../models/ingredient';
import { AddEditRecipeService } from './add-edit-recipe.service';

describe('AddEditRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddEditRecipeService,
      FormBuilder
    ]
  }));

  it('should be created', () => {
    const service: AddEditRecipeService = TestBed.get(AddEditRecipeService);
    expect(service).toBeTruthy();
  });

  it('should remove ingredient from recipe ingredients list',
    inject([AddEditRecipeService], (addEditRecipeService: AddEditRecipeService) => {
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
      const splicedIngredientsList = addEditRecipeService.removeIngredientFromIngredientsList(ingredient, ingredientsList);
      expect(splicedIngredientsList).toEqual(expectedIngredientsList);
    }));

  it('should remove redundant ingredient info from ingredients objects', inject([AddEditRecipeService],
    (addEditRecipeService: AddEditRecipeService) => {
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
      const mappedIngredientsList = addEditRecipeService.mapIngredientsToFormValue(ingredientsList);
      expect(mappedIngredientsList).toEqual(expectedIngredientsList);
    }));

  it('should create recipe ingredient item', inject([AddEditRecipeService, FormBuilder],
    (addRecipeService: AddEditRecipeService, formBuilder: FormBuilder) => {
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

  it('should create add recipe request', inject([AddEditRecipeService], (addEditRecipeService: AddEditRecipeService) => {
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
    const addRecipeRequest = addEditRecipeService.createAddRecipeRequest(recipeFormValues);
    expect(addRecipeRequest).toEqual(expectedAddRecipeRequest);
  }));

  it('should create edit recipe request', inject([AddEditRecipeService], (addEditRecipeService: AddEditRecipeService) => {
    const recipeFormValues: EditRecipeForm = {
      id: 1,
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
    const expectedAddRecipeRequest: EditRecipeRequest = {
      id: 1,
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
    const addRecipeRequest = addEditRecipeService.createEditRecipeRequest(recipeFormValues);
    expect(addRecipeRequest).toEqual(expectedAddRecipeRequest);
  }));

  it('should return updated ingredients list for chips', inject([AddEditRecipeService, FormBuilder],
    (addRecipeService: AddEditRecipeService) => {
      const ingredients: Ingredient[] = [
        {
          id: 1,
          userId: 1,
          name: 'Mleko',
          quantity: 2,
          unit: 'ml'
        }
      ];
      const createdFormIngredients = addRecipeService.updateRecipeIngredientsChips(ingredients);
      const expectedFormIngredients: FormIngredient[] = [
        {
          id: 1,
          name: 'Mleko',
          unit: 'ml',
          quantity: 2
        }
      ];
      expect(expectedFormIngredients).toEqual(createdFormIngredients);
    }));
});
