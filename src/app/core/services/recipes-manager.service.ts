import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipesManagerActionTypes, SetAppLoadingFlag, ThrowAuthError } from 'src/app/core/+state/recipes-manager.actions';
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

    public setCuisineTypesDropdownValues(): MatSelectCuisineType[] {
        return [{
            value: CuisineType.Polish,
            viewValue: CuisineType.Polish
        },
        {
            value: CuisineType.Italian,
            viewValue: CuisineType.Italian
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
}
