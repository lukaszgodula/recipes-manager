import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

@Component({
  selector: 'recipes-list-table',
  templateUrl: './recipes-list-table.component.html',
  styleUrls: ['./recipes-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListTableComponent implements OnInit {
  @Input() recipesListItems: RecipesListItem[];
  @Output() rowClicked: EventEmitter<number> = new EventEmitter();
  @Output() editClicked: EventEmitter<RecipesListItem> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<RecipesListItem> = new EventEmitter();
  public displayedColumns: string[] = ['name', 'cuisine', 'level', 'action'];

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
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
