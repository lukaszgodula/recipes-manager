import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsListTableComponent } from './ingredients-list-table.component';

describe('IngredientsListTableComponent', () => {
  let component: IngredientsListTableComponent;
  let fixture: ComponentFixture<IngredientsListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsListTableComponent ]
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
