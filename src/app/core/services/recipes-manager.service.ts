import { Injectable } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipesManagerActionTypes, SetAppLoadingFlag } from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

@Injectable()
export class RecipesManagerService {

    constructor(private store: Store<RecipesManagerState>) { }

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
}
