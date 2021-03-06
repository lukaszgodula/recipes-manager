import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChangeLoginStatus, RecipesManagerActionTypes } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';
import { UserInputLoginData } from 'src/app/core/models/user-input-login-data';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

import { FirebaseAuthError } from '../models/firebase-auth-error';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store<RecipesManagerState>,
    private recipesManagerService: RecipesManagerService) {
  }

  public signUpWithEmail(signUpData: UserInputLoginData): void {
    this.afAuth.auth.createUserWithEmailAndPassword(signUpData.username, signUpData.password)
      .then((res) => {
        this.router.navigate(['../']);
      })
      .catch(err => { this.recipesManagerService.throwAuthError(err); });
  }

  public signInWithEmail(loginData: UserInputLoginData): void {
    this.afAuth.auth.signInWithEmailAndPassword(loginData.username, loginData.password)
      .then((res) => {
        this.router.navigate(['../']);
      })
      .catch((err: FirebaseAuthError) => {
        this.recipesManagerService.throwAuthError(err);
      });
  }

  public logOut(): void {
    this.afAuth.auth.signOut()
      .then((res) => {
        this.updateUserState(null);
      })
      .catch(err => this.recipesManagerService.throwAuthError(err));
  }

  public observeLoginStatus(): void {
    this.afAuth.authState.subscribe((u: User) => {
      this.recipesManagerService.setAppLoadingFlag(true);
      if (u) {
        this.updateUserState(u);
      } else {
        this.recipesManagerService.setAppLoadingFlag(false);
        this.router.navigate(['/login']);
      }
    });
  }

  public authStateCheck(): boolean | Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => {
      return (user) ? true : false;
    }));
  }

  private updateUserState(u: User): void {
    const recipesManagerUser: RecipesManagerUser = {
      email: u && u.email ? u.email : null,
      uid: u && u.uid ? u.uid : null
    };
    this.store.dispatch<ChangeLoginStatus>({
      type: RecipesManagerActionTypes.ChangeLoginStatus,
      payload: {
        user: u ? recipesManagerUser : null
      }
    });
  }
}
