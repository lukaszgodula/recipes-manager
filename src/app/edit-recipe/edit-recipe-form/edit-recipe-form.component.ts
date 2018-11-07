import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { RecipeCategory } from 'src/app/core/enums/recipe-category.enum';
import { EditRecipeForm } from 'src/app/core/models/edit-recipe-form';
import { FormIngredient } from 'src/app/core/models/form-ingredient';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';
import { MatSelectCategoryType } from 'src/app/core/models/mat-select-category-type';
import { MatSelectCuisineType } from 'src/app/core/models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from 'src/app/core/models/mat-select-difficulty-level';
import { AddEditRecipeService } from 'src/app/core/services/add-edit-recipe.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

@Component({
  selector: 'edit-recipe-form',
  templateUrl: './edit-recipe-form.component.html',
  styleUrls: ['./edit-recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRecipeFormComponent implements OnChanges, OnInit {
  @Input() recipeId: number;
  @Input() recipeName: string;
  @Input() recipeCuisineType: CuisineType;
  @Input() recipeImageUrl: string = '';
  @Input() recipeDifficultyLevel: DifficultyLevel;
  @Input() recipeTime: number;
  @Input() isVege: boolean;
  @Input() recipeIngredients: Ingredient[];
  @Input() recipeDescription: string;
  @Input() recipePortions: number;
  @Input() recipeCategory: RecipeCategory;
  @Input() ingredientsList: IngredientListItem[] = [];

  @Output() cancelClicked: EventEmitter<null> = new EventEmitter();
  @Output() submitClicked: EventEmitter<EditRecipeForm> = new EventEmitter();
  @Output() addNewIngredientClicked: EventEmitter<null> = new EventEmitter();

  public editRecipeForm: FormGroup;
  public cuisineTypes: MatSelectCuisineType[];
  public difficultyLevels: MatSelectDifficultyLevel[];
  public categoryTypes: MatSelectCategoryType[];
  public ingredientsForm: FormGroup;
  public recipeIngredientsChips: FormIngredient[] = [];

  constructor(private recipesManagerService: RecipesManagerService,
    private addEditRecipeService: AddEditRecipeService) {
    this.editRecipeForm = this.addEditRecipeService.createEditRecipeForm();
    this.ingredientsForm = this.addEditRecipeService.createAddIngreientToListForm();
  }

  ngOnChanges() {
    if (this.recipeId) {
      this.setFormValues();
    }
    if (this.recipeIngredients.length > 0) {
      this.recipeIngredientsChips = this.addEditRecipeService.updateRecipeIngredientsChips(this.recipeIngredients);
    }
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
    this.submitClicked.emit(this.editRecipeForm.value);
    this.editRecipeForm.reset();
  }

  public addIngredientToForm(): void {
    this.recipeIngredientsChips.push(this.addEditRecipeService.createRecipeIngredientItem(this.ingredientsForm));
    this.updateIngredientsInForm(this.recipeIngredientsChips);
    this.ingredientsForm.reset();
  }

  public onAddNewIngredient(): void {
    this.addNewIngredientClicked.emit();
  }

  public removeRecipeIngredientFromForm(ingredient: FormIngredient): void {
    this.recipeIngredientsChips = this.addEditRecipeService.removeIngredientFromIngredientsList(ingredient, this.recipeIngredientsChips);
    this.updateIngredientsInForm(this.recipeIngredientsChips);
  }

  private setFormValues(): void {
    this.editRecipeForm.patchValue({
      id: this.recipeId,
      name: this.recipeName,
      cuisineType: this.recipeCuisineType,
      time: this.recipeTime,
      difficultyLevel: this.recipeDifficultyLevel,
      category: this.recipeCategory,
      imageUrl: this.recipeImageUrl,
      portions: this.recipePortions,
      isVege: this.isVege,
      description: this.recipesManagerService.changeHtmlToNewLine(this.recipeDescription),
      ingredients: this.addEditRecipeService.mapIngredientsToFormValue(this.recipeIngredients)
    });
  }

  private updateIngredientsInForm(recipeIngredients: FormIngredient[]) {
    this.editRecipeForm.patchValue({
      ingredients: this.addEditRecipeService.mapIngredientsToFormValue(recipeIngredients)
    });
    this.editRecipeForm.markAsDirty();
  }

}
