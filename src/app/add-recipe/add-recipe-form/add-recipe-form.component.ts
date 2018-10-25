import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRecipeForm } from 'src/app/core/models/add-recipe-form';
import { FormIngredient } from 'src/app/core/models/form-ingredient';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';
import { MatSelectCategoryType } from 'src/app/core/models/mat-select-category-type';
import { MatSelectCuisineType } from 'src/app/core/models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from 'src/app/core/models/mat-select-difficulty-level';
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

  constructor(private formBuilder: FormBuilder,
    private recipesManagerService: RecipesManagerService) {
    this.createAddRecipeForm();
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

  public addIngredientToForm(): void {
    const recipeIngredient: FormIngredient = this.createRecipeIngredientItem();
    this.recipeIngredients.push(recipeIngredient);
    this.updateIngredientsInForm();
    this.ingredientsForm.reset();
  }

  public removeRecipeIngredientFromForm(ingredient: FormIngredient): void {
    this.removeIngredientFromIngredientsList(ingredient);
    this.updateIngredientsInForm();
  }

  private removeIngredientFromIngredientsList(ingredient: FormIngredient) {
    const index: number = this.recipeIngredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      this.recipeIngredients.splice(index, 1);
    }
  }

  private updateIngredientsInForm() {
    const ingredientsToForm: FormIngredient[] = this.mapIngredientsToFormValue(this.recipeIngredients);
    this.addRecipeForm.patchValue({
      ingredients: ingredientsToForm
    });
  }

  private mapIngredientsToFormValue(recipeIngredients: FormIngredient[]): FormIngredient[] {
    return recipeIngredients.map(i => ({ id: i.id, quantity: i.quantity }));
  }

  private createRecipeIngredientItem(): FormIngredient {
    return {
      id: this.ingredientsForm.value.ingredient.id,
      quantity: this.ingredientsForm.value.quantity,
      name: this.ingredientsForm.value.ingredient.name,
      unit: this.ingredientsForm.value.ingredient.unit
    };
  }

  private createAddRecipeForm(): void {
    this.addRecipeForm = this.formBuilder.group({
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
    this.ingredientsForm = this.formBuilder.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

}
