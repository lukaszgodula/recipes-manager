import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';

import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from '../core/+state/recipes-manager.reducer';
import { ManageIngredientsComponent } from './manage-ingredients.component';

describe('ManageIngredientsComponent', () => {
  let component: ManageIngredientsComponent;
  let fixture: ComponentFixture<ManageIngredientsComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageIngredientsComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        StoreModule.forRoot({
          ...recipesManagerReducer
        }),
        NoopAnimationsModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(ManageIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
