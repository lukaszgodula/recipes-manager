import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';
import { AddEditRecipeServiceMock } from 'src/testing/add-edit-recipe-service.mock';
import { MockRouter } from 'src/testing/router-mock';

import { AddEditRecipeService } from '../core/services/add-edit-recipe.service';
import { RecipesManagerState } from './../core/+state/recipes-manager.interfaces';
import { AddRecipeComponent } from './add-recipe.component';

describe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...recipesManagerReducer
        })
      ],
      providers: [{
        provide: Router,
        useClass: MockRouter
      },
      {
        provide: MatDialog,
        useValue: {}
      },
      {
        provide: AddEditRecipeService,
        useClass: AddEditRecipeServiceMock
      }
      ],
      declarations: [AddRecipeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
