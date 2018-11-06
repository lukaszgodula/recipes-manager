import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditRecipeService } from 'src/app/core/services/add-edit-recipe.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';
import { RecipesManagerServiceMock } from 'src/testing/recipes-manager-service.mock';

import { EditRecipeFormComponent } from './edit-recipe-form.component';

describe('EditRecipeFormComponent', () => {
  let component: EditRecipeFormComponent;
  let fixture: ComponentFixture<EditRecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecipeFormComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatChipsModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: RecipesManagerService, useClass: RecipesManagerServiceMock },
        AddEditRecipeService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
