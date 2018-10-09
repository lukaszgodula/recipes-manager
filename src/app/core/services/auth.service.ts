import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { ChangeLoginStatus, RecipesManagerActionTypes } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { RecipesManagerUser } from 'src/app/core/models/recipes-manager-user';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store<RecipesManagerState>,
    private recipesManagerService: RecipesManagerService) {
    this.user = afAuth.user;
  }

  public signInWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  public observeLoginStatus(): void {
    this.user.subscribe((u: User) => {
      this.recipesManagerService.setAppLoadingFlag(true);
      if (u) {
        this.updateUserState(u);
      } else {
        this.recipesManagerService.setAppLoadingFlag(false);
        this.router.navigate(['/login']);
      }
    });
  }

  private updateUserState(u: User) {
    const recipesManagerUser: RecipesManagerUser = {
      email: u.email,
      uid: u.uid,
    };
    this.store.dispatch<ChangeLoginStatus>({
      type: RecipesManagerActionTypes.ChangeLoginStatus,
      payload: {
        user: recipesManagerUser
      }
    });
  }
}
