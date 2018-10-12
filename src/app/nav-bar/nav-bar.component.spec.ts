import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';
import { MockStore } from 'src/mocks/mock-store';
import { MockRouter } from 'src/testing/router-mock';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [
        MatToolbarModule,
        MatIconModule
      ],
      providers: [
        {
          provide: Router,
          useClass: MockRouter
        },
        { provide: Store, useClass: MockStore },
        { provide: RecipesManagerService, useValue: () => { } },
        { provide: AuthService, useValue: () => { } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
