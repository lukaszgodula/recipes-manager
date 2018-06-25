import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipesManagerActionTypes, TestState } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<RecipesManagerState>) {
  }

  ngOnInit() {
    this.store.dispatch<TestState>({
      type: RecipesManagerActionTypes.TestState,
      payload: {
        testStateNumber: 5
      }
    });
  }
}
