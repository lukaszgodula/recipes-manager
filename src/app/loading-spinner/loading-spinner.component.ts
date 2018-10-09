import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { StoreUtil } from 'src/app/core/utils/store.util';

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  public isAppLoading: Observable<boolean>;

  constructor(private store: Store<RecipesManagerState>) { }

  ngOnInit() {
    this.isAppLoading = StoreUtil.select(this.store, FromRecipesManagerState.isAppLoading);
  }

}
