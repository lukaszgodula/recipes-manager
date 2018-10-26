import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddIngredient, RecipesManagerActionTypes } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

@Component({
  selector: 'add-ingredient-dialog',
  templateUrl: './add-ingredient-dialog.component.html',
  styleUrls: ['./add-ingredient-dialog.component.scss']
})
export class AddIngredientDialogComponent implements OnInit {
  public addIngredientForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddIngredientDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<RecipesManagerState>) { this.buildAddIngredientForm(); }

  ngOnInit() {
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddClick(): void {
    this.store.dispatch<AddIngredient>({
      type: RecipesManagerActionTypes.AddIngredient,
      payload: {
        ingredient: this.addIngredientForm.value
      }
    });
    this.dialogRef.close();
  }

  private buildAddIngredientForm(): void {
    this.addIngredientForm = this.formBuilder.group({
      ingredientName: ['', Validators.required],
      ingredientUnit: ['', Validators.required]
    });
  }

}
