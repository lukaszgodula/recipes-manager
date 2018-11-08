import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientListItem } from 'src/app/core/models/ingredient-list-item';

@Component({
  selector: 'ingredients-list-table',
  templateUrl: './ingredients-list-table.component.html',
  styleUrls: ['./ingredients-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsListTableComponent implements OnInit, OnChanges {
  @Input() ingredientsList: IngredientListItem[] = [];
  public displayedColumns: string[] = ['name', 'unit', 'action'];
  public dataSource = new MatTableDataSource(this.ingredientsList);

  @Output() editClicked: EventEmitter<IngredientListItem> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<IngredientListItem> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ingredientsList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

  public onEditClicked(ingredient: IngredientListItem): void {
    this.editClicked.emit(ingredient);
  }

  public onDeleteClicked(ingredient: IngredientListItem): void {
    this.deleteClicked.emit(ingredient);
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
