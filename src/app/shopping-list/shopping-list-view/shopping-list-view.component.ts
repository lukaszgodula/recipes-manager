import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingListItem } from 'src/app/core/models/shopping-list-item';

@Component({
  selector: 'shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListViewComponent implements OnInit {
  @Input() shoppingList: ShoppingListItem[];

  @Output() doneClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onDoneClicked(id: number): void {
    this.doneClicked.emit(id);
  }

}
