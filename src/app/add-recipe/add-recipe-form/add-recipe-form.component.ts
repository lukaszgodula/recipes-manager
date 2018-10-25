import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectCuisineType } from 'src/app/core/models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from 'src/app/core/models/mat-select-difficulty-level';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

@Component({
  selector: 'add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  public addRecipeForm: FormGroup;
  public cuisineTypes: MatSelectCuisineType[];
  public difficultyLevels: MatSelectDifficultyLevel[];
  @Output() cancelClicked: EventEmitter<null> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private recipesManagerService: RecipesManagerService) {
    this.createAddRecipeForm();
  }

  ngOnInit() {
    this.cuisineTypes = this.recipesManagerService.setCuisineTypesDropdownValues();
    this.difficultyLevels = this.recipesManagerService.setDifficultyLevelsDropdownValues();
  }

  public onCancelClicked(): void {
    this.cancelClicked.emit();
  }

  public onSubmit(): void {

  }

  private createAddRecipeForm(): void {
    this.addRecipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      cuisineType: '',
      time: '',
      difficultyLevel: '',
      imageUrl: '',
      portions: '',
      isVege: '',
      description: '',
    });
  }

}
