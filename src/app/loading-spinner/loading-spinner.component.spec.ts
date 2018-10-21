import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store, StoreModule } from '@ngrx/store';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
      imports: [
        MatProgressSpinnerModule,
        StoreModule.forRoot({
          ...recipesManagerReducer
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
