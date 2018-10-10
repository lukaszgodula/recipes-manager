import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerActionTypes, SetAuthProgress } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { FromRecipesManagerState } from 'src/app/core/+state/recipes-manager.selectors';
import { UserInputLoginData } from 'src/app/core/models/user-input-login-data';
import { AuthService } from 'src/app/core/services/auth.service';
import { StoreUtil } from 'src/app/core/utils/store.util';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authInProgress: Observable<boolean>;

  constructor(private authService: AuthService,
    private store: Store<RecipesManagerState>) { }

  ngOnInit() {
    this.authInProgress = StoreUtil.select(this.store, FromRecipesManagerState.isAuthInProgress);
  }

  public logIn(event: UserInputLoginData) {
    this.setAuthInProgress();
    this.authService.signInWithEmail(event);
  }

  public signUp(event: UserInputLoginData) {
    this.setAuthInProgress();
    this.authService.signUpWithEmail(event);
  }

  public logOut() {
    this.setAuthInProgress();
    this.authService.logOut();
  }

  private setAuthInProgress() {
    this.store.dispatch<SetAuthProgress>({
      type: RecipesManagerActionTypes.SetAuthProgress,
      payload: {
        authInProgress: true
      }
    });
  }

}
