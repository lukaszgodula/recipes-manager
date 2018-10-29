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
  @Output() navigateToDetails: EventEmitter<number> = new EventEmitter();
  public displayedColumns: string[] = ['name', 'cuisine', 'level', 'delete'];

  constructor() { }

  ngOnInit() {
  }
  public onRowClicked(rowData: RecipesListItem): void {
    this.navigateToDetails.emit(rowData.id);
  }
}
