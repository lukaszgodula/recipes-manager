import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
  selector: 'recipe-details-view',
  templateUrl: './recipe-details-view.component.html',
  styleUrls: ['./recipe-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsViewComponent implements OnInit {
  @Input() recipeName: string;
  @Input() recipeImageUrl: string = '';
  @Input() recipeDifficultyLevel: DifficultyLevel;
  @Input() recipeTime: number;
  @Input() isVege: boolean;
  @Input() recipeIngredients: Ingredient[];
  @Input() recipeDescription: string;
  @Input() portions: number;

  @Output() addToShoppingListClicked: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onAddToShoppingListClicked(ingredient): void {
    this.addToShoppingListClicked.emit(ingredient);
  }


}
