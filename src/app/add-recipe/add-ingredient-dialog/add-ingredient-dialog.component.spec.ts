import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';

import { AddIngredientDialogComponent } from './add-ingredient-dialog.component';

describe('AddIngredientDialogComponent', () => {
  let component: AddIngredientDialogComponent;
  let fixture: ComponentFixture<AddIngredientDialogComponent>;
  let store: Store<RecipesManagerState>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        StoreModule.forRoot({
          ...recipesManagerReducer
        }),
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [AddIngredientDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(AddIngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
