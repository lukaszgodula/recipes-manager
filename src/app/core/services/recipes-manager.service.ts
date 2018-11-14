import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParamMap, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent, merge, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import {
  LoadRecipeDetails,
  RecipesManagerActionTypes,
  SetAppLoadingFlag,
  SetNetworkStatus,
  ThrowAuthError,
} from 'src/app/core/+state/recipes-manager.actions';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from '../enums/difficulty-level.enum';
import { RecipeCategory } from '../enums/recipe-category.enum';
import { FirebaseAuthError } from '../models/firebase-auth-error';
import { MatSelectCategoryType } from './../models/mat-select-category-type';
import { MatSelectCuisineType } from './../models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from './../models/mat-select-difficulty-level';

@Injectable()
export class RecipesManagerService {
  public isUserConnected: Observable<boolean>;

  constructor(private store: Store<RecipesManagerState>,
    public snackBar: MatSnackBar,
    private dialog: MatDialog) {
    this.createNetworkObservable();
    this.monitorNetworkStatus();
  }

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

  public openSnackBar(message: string, action?: string, duration?: number) {
    return this.snackBar.open(message, action, { duration: duration });
  }

  public setCuisineTypesDropdownValues(): MatSelectCuisineType[] {
    return [{
      value: CuisineType.Polish,
      viewValue: CuisineType.Polish
    },
    {
      value: CuisineType.Italian,
      viewValue: CuisineType.Italian
    },
    {
      value: CuisineType.Chinese,
      viewValue: CuisineType.Chinese
    }, {
      value: CuisineType.French,
      viewValue: CuisineType.French
    },
    {
      value: CuisineType.American,
      viewValue: CuisineType.American
    },
    {
      value: CuisineType.Asian,
      viewValue: CuisineType.Asian
    },
    {
      value: CuisineType.Japanese,
      viewValue: CuisineType.Japanese
    },
    {
      value: CuisineType.Other,
      viewValue: CuisineType.Other
    },
    {
      value: CuisineType.None,
      viewValue: CuisineType.None
    }];
  }

  public setDifficultyLevelsDropdownValues(): MatSelectDifficultyLevel[] {
    return [{
      value: DifficultyLevel.Easy,
      viewValue: DifficultyLevel.Easy
    },
    {
      value: DifficultyLevel.Medium,
      viewValue: DifficultyLevel.Medium
    },
    {
      value: DifficultyLevel.Hard,
      viewValue: DifficultyLevel.Hard
    }];
  }

  public setCategoryTypesDropdownValues(): MatSelectCategoryType[] {
    return [{
      value: RecipeCategory.Soup,
      viewValue: RecipeCategory.Soup
    },
    {
      value: RecipeCategory.MainCourse,
      viewValue: RecipeCategory.MainCourse
    },
    {
      value: RecipeCategory.Dessert,
      viewValue: RecipeCategory.Dessert
    },
    {
      value: RecipeCategory.Drinks,
      viewValue: RecipeCategory.Drinks
    },
    {
      value: RecipeCategory.Cake,
      viewValue: RecipeCategory.Cake
    },
    {
      value: RecipeCategory.Other,
      viewValue: RecipeCategory.Other
    }];
  }

  public dispatchLoadRecipes(pmap: ParamMap) {
    this.store.dispatch<LoadRecipeDetails>({
      type: RecipesManagerActionTypes.LoadRecipeDetails,
      payload: {
        id: +pmap.get('id')
      }
    });
  }

  public changeHtmlToNewLine(text: string): string {
    return text.replace(/<br\s*[\/]?>/gi, '\n');
  }

  public confirmExit(message?: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: { message: message || 'Are you sure?' } });
    return dialogRef.afterClosed().pipe(switchMap((data: boolean) => of(data)));
  }

  private createNetworkObservable() {
    this.isUserConnected = merge(
      of(navigator.onLine),
      fromEvent(window, 'online')
        .pipe(
          map(() => true)),
      fromEvent(window, 'offline')
        .pipe(map(() => false)));
  }

  private monitorNetworkStatus(): void {
    this.isUserConnected
      .subscribe(isOnline => {
        this.store.dispatch<SetNetworkStatus>({
          type: RecipesManagerActionTypes.SetNetworkStatus,
          payload: {
            isUserOnline: isOnline
          }
        });
      });
  }
}
