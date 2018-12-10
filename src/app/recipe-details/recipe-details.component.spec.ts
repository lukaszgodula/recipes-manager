import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ShoppingListFacadeMock } from 'src/testing/shopping-list-facade.mock';

import { RecipesManagerActionTypes } from '../core/+state/recipes-manager.actions';
import { ShoppingListFacade } from '../shopping-list/+state/shopping-list.facade';
import { RecipeDetailsComponent } from './recipe-details.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;
  let activatedRoute: ActivatedRouteStub;
  let store: Store<RecipesManagerState>;

  activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({ id: 1 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsComponent],
      imports: [
        StoreModule.forRoot({
          ...recipesManagerReducer
        })
      ],
      providers: [
        {
          provide: Router,
          useValue: () => { }
        },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: ShoppingListFacade, useClass: ShoppingListFacadeMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load recipe detailes when created', () => {
    let recipeId: number;
    activatedRoute.paramMap.subscribe(
      pmap => {
        recipeId = +pmap.get('id');
      }
    );
    const action = {
      type: RecipesManagerActionTypes.LoadRecipeDetails,
      payload: { id: recipeId }
    };

    expect(recipeId).toEqual(1);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
