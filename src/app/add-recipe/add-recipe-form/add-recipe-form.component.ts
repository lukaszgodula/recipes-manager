import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';
import { FormIngredient } from 'src/app/core/models/form-ingredient';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';
import { MatSelectCategoryType } from 'src/app/core/models/mat-select-category-type';
import { MatSelectCuisineType } from 'src/app/core/models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from 'src/app/core/models/mat-select-difficulty-level';
import { AddEditRecipeService } from 'src/app/core/services/add-edit-recipe.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

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
    private addEditRecipeService: AddEditRecipeService) {
    this.addRecipeForm = this.addEditRecipeService.createAddRecipeForm();
    this.ingredientsForm = this.addEditRecipeService.createAddIngreientToListForm();
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
    this.addRecipeForm.reset();
  }

  public onAddNewIngredient(): void {
    this.addNewIngredientClicked.emit();
  }

  public addIngredientToForm(): void {
    this.recipeIngredients.push(this.addEditRecipeService.createRecipeIngredientItem(this.ingredientsForm));
    this.updateIngredientsInForm(this.recipeIngredients);
    this.ingredientsForm.reset();
  }

  public removeRecipeIngredientFromForm(ingredient: FormIngredient): void {
    this.recipeIngredients = this.addEditRecipeService.removeIngredientFromIngredientsList(ingredient, this.recipeIngredients);
    this.updateIngredientsInForm(this.recipeIngredients);
  }

  private updateIngredientsInForm(recipeIngredients: FormIngredient[]) {
    this.addRecipeForm.patchValue({
      ingredients: this.addEditRecipeService.mapIngredientsToFormValue(recipeIngredients)
    });
    this.addRecipeForm.markAsDirty();
  }

}
