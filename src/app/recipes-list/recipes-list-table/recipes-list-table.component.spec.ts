import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { RecipesListTableComponent } from './recipes-list-table.component';

describe('RecipesListTableComponent', () => {
  const recipesListColumns: string[] = ['name', 'cuisine', 'level', 'action'];
  let component: RecipesListTableComponent;
  let fixture: ComponentFixture<RecipesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListTableComponent],
      imports: [MatTableModule,
        MatIconModule]
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

  it(`should have proper columns in table`, async(() => {
    expect(component.displayedColumns).toEqual(recipesListColumns);
  }));
});
