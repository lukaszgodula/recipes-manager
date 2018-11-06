import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { AddEditRecipeServiceMock } from 'src/testing/add-edit-recipe-service.mock';
import { RecipesManagerServiceMock } from 'src/testing/recipes-manager-service.mock';
import { MockRouter } from 'src/testing/router-mock';

import { RecipesManagerState } from '../core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from '../core/+state/recipes-manager.reducer';
import { AddEditRecipeService } from '../core/services/add-edit-recipe.service';
import { RecipesManagerService } from '../core/services/recipes-manager.service';
import { EditRecipeComponent } from './edit-recipe.component';

describe('EditRecipeComponent', () => {
  let component: EditRecipeComponent;
  let fixture: ComponentFixture<EditRecipeComponent>;
  let activatedRoute: ActivatedRouteStub;
  let store: Store<RecipesManagerState>;

  activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({ id: 1 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecipeComponent],
      imports: [
        StoreModule.forRoot({
          ...recipesManagerReducer
        })
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: RecipesManagerService, useClass: RecipesManagerServiceMock },
        { provide: AddEditRecipeService, useClass: AddEditRecipeServiceMock },
        { provide: Router, useClass: MockRouter },
        { provide: MatDialog, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(EditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
