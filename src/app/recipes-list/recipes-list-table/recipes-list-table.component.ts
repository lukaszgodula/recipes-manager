import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

@Component({
  selector: 'recipes-list-table',
  templateUrl: './recipes-list-table.component.html',
  styleUrls: ['./recipes-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListTableComponent implements OnInit {
  @Input() recipesListItems: RecipesListItem[];
  public displayedColumns: string[] = ['name', 'cuisine', 'level'];

  constructor() { }

  ngOnInit() {
  }

}
