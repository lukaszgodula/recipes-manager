import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { EditIngredient, RecipesManagerActionTypes } from '../core/+state/recipes-manager.actions';
import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { IngredientListItem } from '../core/models/ingredient-list-item';
import { UnsubscribingOnDestroy } from '../core/utils/unsubscribing-on-destroy';

@Component({
  selector: 'edit-ingredient-dialog',
  templateUrl: './edit-ingredient-dialog.component.html',
  styleUrls: ['./edit-ingredient-dialog.component.scss']
})
export class EditIngredientDialogComponent extends UnsubscribingOnDestroy implements OnInit {
  public editIngredientForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditIngredientDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<RecipesManagerState>,
    @Inject(MAT_DIALOG_DATA) public data: IngredientListItem) {
    super();
    this.buildEditIngredientForm();
  }

  ngOnInit() {
    this.dialogRef.afterOpen().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.setFormValues(this.data);
      });
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onEditClick(): void {
    this.store.dispatch<EditIngredient>({
      type: RecipesManagerActionTypes.EditIngredient,
      payload: {
        ingredient: this.editIngredientForm.value
      }
    });
    this.dialogRef.close();
  }

  private setFormValues(ingredientData: IngredientListItem) {
    this.editIngredientForm.patchValue({
      ingredientId: ingredientData.id,
      ingredientName: ingredientData.name,
      ingredientUnit: ingredientData.unit
    });
  }

  private buildEditIngredientForm(): void {
    this.editIngredientForm = this.formBuilder.group({
      ingredientId: ['', Validators.required],
      ingredientName: ['', Validators.required],
      ingredientUnit: ['', Validators.required]
    });
  }

}
