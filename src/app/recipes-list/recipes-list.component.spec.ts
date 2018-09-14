import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { MockStore } from 'src/mocks/mock-store';

import { RecipesListComponent } from './recipes-list.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  const actions = new Subject<Action>();
  const states = new Subject<RecipesManagerState>();
  // const store = mockStore<RecipesManagerState>({ actions, states });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListComponent ],
      providers: [
        {
          provide: Store,
          useClass: MockStore
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
