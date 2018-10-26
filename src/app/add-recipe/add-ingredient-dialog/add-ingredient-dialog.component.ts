import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-ingredient-dialog',
  templateUrl: './add-ingredient-dialog.component.html',
  styleUrls: ['./add-ingredient-dialog.component.scss']
})
export class AddIngredientDialogComponent implements OnInit {
  public addIngredientForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddIngredientDialogComponent>,
    private formBuilder: FormBuilder) { this.buildAddIngredientForm(); }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.dialogRef.close();
  }

  private buildAddIngredientForm(): void {
    this.addIngredientForm = this.formBuilder.group({
      ingredientName: ['', Validators.required],
      ingredientUnit: ['', Validators.required]
    });
  }

}
