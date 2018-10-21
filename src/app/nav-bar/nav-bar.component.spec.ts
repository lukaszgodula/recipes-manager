import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { recipesManagerReducer } from 'src/app/core/+state/recipes-manager.reducer';
import { AuthService } from 'src/app/core/services/auth.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';
import { MockRouter } from 'src/testing/router-mock';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let store: Store<RecipesManagerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [
        MatToolbarModule,
        MatIconModule,
        StoreModule.forRoot({
          ...recipesManagerReducer
        })
      ],
      providers: [
        {
          provide: Router,
          useClass: MockRouter
        },
        { provide: RecipesManagerService, useValue: () => { } },
        { provide: AuthService, useValue: () => { } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
