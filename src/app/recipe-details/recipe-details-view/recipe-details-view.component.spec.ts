import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RecipeDetailsViewComponent } from './recipe-details-view.component';

describe('RecipeDetailsViewComponent', () => {
  let component: RecipeDetailsViewComponent;
  let fixture: ComponentFixture<RecipeDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsViewComponent],
      imports: [
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsViewComponent);
    component = fixture.componentInstance;
    component.recipeIngredients = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
