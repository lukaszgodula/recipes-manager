import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipesManagerActionTypes, SetAppLoadingFlag, ThrowAuthError } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { FirebaseAuthError } from '../models/firebase-auth-error';

@Injectable()
export class RecipesManagerService {

    constructor(private store: Store<RecipesManagerState>,
        public snackBar: MatSnackBar) { }

    public setAppLoadingFlag(isLoading: boolean) {
        this.store.dispatch<SetAppLoadingFlag>({
            type: RecipesManagerActionTypes.SetAppLoadingFlag,
            payload: {
                isAppLoading: isLoading
            }
        });
    }

    public isInRoot(event: RouterEvent): boolean {
        if (event.url === '/') {
            return true;
        } else {
            return false;
        }
    }

    public throwAuthError(err: FirebaseAuthError) {
        this.store.dispatch<ThrowAuthError>({
            type: RecipesManagerActionTypes.ThrowAuthError,
            payload: {
                errorMessage: err.message
            }
        });
    }

    public openSnackBar(message: string, action?: string, duration?: number): void {
        this.snackBar.open(message, action, { duration: duration });
    }
}
