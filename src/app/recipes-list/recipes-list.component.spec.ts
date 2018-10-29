import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';

import { RecipesManagerState } from './../core/+state/recipes-manager.interfaces';
import { RecipesListComponent } from './recipes-list.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListComponent],
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
        {
          provide: MatDialog,
          useValue: {}
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
