import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from '../core/+state/recipes-manager.reducer';
import { EditIngredientDialogComponent } from './edit-ingredient-dialog.component';

describe('EditIngredientDialogComponent', () => {
  let component: EditIngredientDialogComponent;
  let fixture: ComponentFixture<EditIngredientDialogComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditIngredientDialogComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        StoreModule.forRoot({
          ...recipesManagerReducer
        }),
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { afterOpen(): Observable<null> { return of(null); } } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(EditIngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
