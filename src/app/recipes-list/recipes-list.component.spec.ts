import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { MockStore } from 'src/mocks/mock-store';

import { RecipesListComponent } from './recipes-list.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListComponent],
      providers: [
        {
          provide: Store,
          useClass: MockStore
        },
        {
          provide: Router,
          useValue: () => { }
        },
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
