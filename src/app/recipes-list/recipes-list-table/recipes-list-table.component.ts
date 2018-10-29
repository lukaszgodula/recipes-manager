import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteClicked: EventEmitter<RecipesListItem> = new EventEmitter();
  public displayedColumns: string[] = ['name', 'cuisine', 'level', 'delete'];

  constructor() { }

  ngOnInit() {
  }
  public onRowClicked(rowData: RecipesListItem): void {
    this.rowClicked.emit(rowData.id);
  }

  public onDeleteClicked(recipe: RecipesListItem): void {
    event.stopPropagation();
    this.deleteClicked.emit(recipe);
  }
}
