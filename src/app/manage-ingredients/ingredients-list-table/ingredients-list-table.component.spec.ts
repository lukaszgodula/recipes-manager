import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IngredientsListTableComponent } from './ingredients-list-table.component';

describe('IngredientsListTableComponent', () => {
  let component: IngredientsListTableComponent;
  let fixture: ComponentFixture<IngredientsListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsListTableComponent],
      imports: [
        MatTableModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
