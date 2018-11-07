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
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

@Component({
  selector: 'recipes-list-table',
  templateUrl: './recipes-list-table.component.html',
  styleUrls: ['./recipes-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListTableComponent implements OnInit, OnChanges {
  @Input() recipesListItems: RecipesListItem[];
  @Output() rowClicked: EventEmitter<number> = new EventEmitter();
  @Output() editClicked: EventEmitter<RecipesListItem> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<RecipesListItem> = new EventEmitter();

  public displayedColumns: string[] = ['name', 'cuisine', 'category', 'action'];
  public dataSource = new MatTableDataSource(this.recipesListItems);

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.recipesListItems);
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public onRowClicked(rowData: RecipesListItem): void {
    this.rowClicked.emit(rowData.id);
  }

  public onEditClicked(recipe: RecipesListItem): void {
    this.editClicked.emit(recipe);
  }

  public openMenu(): void {
    event.stopPropagation();
    this.menuTrigger.openMenu();
  }

  public onDeleteClicked(recipe: RecipesListItem): void {
    this.deleteClicked.emit(recipe);
  }
}
