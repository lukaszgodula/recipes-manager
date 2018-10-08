import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/mocks/mock-store';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { RecipeDetailsComponent } from './recipe-details.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;
  let activatedRoute: ActivatedRouteStub;

  activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({ id: 1 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsComponent],
      providers: [
        {
          provide: Store,
          useClass: MockStore
        },
        {
          provide: Router,
          useValue: () => { }
        },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
