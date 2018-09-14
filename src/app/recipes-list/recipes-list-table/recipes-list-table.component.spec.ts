import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListTableComponent } from './recipes-list-table.component';

describe('RecipesListTableComponent', () => {
  let component: RecipesListTableComponent;
  let fixture: ComponentFixture<RecipesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
