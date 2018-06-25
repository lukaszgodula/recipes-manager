import { async, TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { mockStore } from 'src/mocks/mock-store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const actions = new Subject<Action>();
  const states = new Subject<RecipesManagerState>();
  const store = mockStore<RecipesManagerState>({ actions, states });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: store
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
