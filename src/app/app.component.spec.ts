import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { AuthService } from 'src/app/core/services/auth.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const actions = new Subject<Action>();
  const states = new Subject<RecipesManagerState>();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useValue: () => { } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
