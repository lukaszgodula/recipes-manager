import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';
import { FormIngredient } from 'src/app/core/models/form-ingredient';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';
import { MatSelectCategoryType } from 'src/app/core/models/mat-select-category-type';
import { MatSelectCuisineType } from 'src/app/core/models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from 'src/app/core/models/mat-select-difficulty-level';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

import { AddRecipeService } from '../add-recipe.service';

@Component({
  selector: 'add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecipeFormComponent implements OnInit {
  @Input() ingredientsList: IngredientListItem[] = [];
  public addRecipeForm: FormGroup;
  public ingredientsForm: FormGroup;
  public cuisineTypes: MatSelectCuisineType[];
  public difficultyLevels: MatSelectDifficultyLevel[];
  public categoryTypes: MatSelectCategoryType[];
  public recipeIngredients: FormIngredient[] = [];
  @Output() cancelClicked: EventEmitter<null> = new EventEmitter();
  @Output() submitClicked: EventEmitter<AddRecipeForm> = new EventEmitter();
  @Output() addNewIngredientClicked: EventEmitter<null> = new EventEmitter();

  constructor(private recipesManagerService: RecipesManagerService,
    private addRecipeService: AddRecipeService) {
    this.addRecipeForm = this.addRecipeService.createAddRecipeForm();
    this.ingredientsForm = this.addRecipeService.createAddIngreientToListForm();
  }

  ngOnInit() {
    this.cuisineTypes = this.recipesManagerService.setCuisineTypesDropdownValues();
    this.difficultyLevels = this.recipesManagerService.setDifficultyLevelsDropdownValues();
    this.categoryTypes = this.recipesManagerService.setCategoryTypesDropdownValues();
  }

  public onCancelClicked(): void {
    this.cancelClicked.emit();
  }

  public onSubmit(): void {
    this.submitClicked.emit(this.addRecipeForm.value);
  }

  public onAddNewIngredient(): void {
    this.addNewIngredientClicked.emit();
  }

  public addIngredientToForm(): void {
    const recipeIngredient: FormIngredient = this.addRecipeService.createRecipeIngredientItem(this.ingredientsForm);
    this.recipeIngredients.push(recipeIngredient);
    this.updateIngredientsInForm(this.recipeIngredients);
    this.ingredientsForm.reset();
  }

  public removeRecipeIngredientFromForm(ingredient: FormIngredient): void {
    this.recipeIngredients = this.addRecipeService.removeIngredientFromIngredientsList(ingredient, this.recipeIngredients);
    this.updateIngredientsInForm(this.recipeIngredients);
  }

  private updateIngredientsInForm(recipeIngredients: FormIngredient[]) {
    const ingredientsToForm: FormIngredient[] = this.addRecipeService.mapIngredientsToFormValue(recipeIngredients);
    this.addRecipeForm.patchValue({
      ingredients: ingredientsToForm
    });
  }

}
