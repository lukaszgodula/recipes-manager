import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddEditRecipeService } from './../core/services/add-edit-recipe.service';
import { EditRecipeFormComponent } from './edit-recipe-form/edit-recipe-form.component';
import { EditRecipeRoutingModule } from './edit-recipe-routing.module';
import { EditRecipeComponent } from './edit-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    EditRecipeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [EditRecipeComponent, EditRecipeFormComponent],
  providers: [AddEditRecipeService]
})
export class EditRecipeModule { }
