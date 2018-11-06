import { OverlayModule } from '@angular/cdk/overlay';
import { inject, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterEvent } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';

import { RecipesManagerState } from '../+state/recipes-manager.interfaces';
import { recipesManagerReducer } from '../+state/recipes-manager.reducer';
import { CuisineType } from '../enums/cuisine-type.enum';
import { DifficultyLevel } from '../enums/difficulty-level.enum';
import { RecipeCategory } from '../enums/recipe-category.enum';
import { MatSelectCategoryType } from '../models/mat-select-category-type';
import { MatSelectCuisineType } from '../models/mat-select-cuisine-type';
import { MatSelectDifficultyLevel } from '../models/mat-select-difficulty-level';
import { RecipesManagerService } from './recipes-manager.service';

let store: Store<RecipesManagerState>;

describe('RecipesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RecipesManagerService,
      MatSnackBar
    ],
    imports: [
      StoreModule.forRoot({
        ...recipesManagerReducer
      }),
      OverlayModule,
      MatSnackBarModule,
      NoopAnimationsModule
    ]
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    const service: RecipesManagerService = TestBed.get(RecipesManagerService);
    expect(service).toBeTruthy();
  });

  it('should set if we are in root',
    inject([RecipesManagerService], (recipesManagerService: RecipesManagerService) => {
      const rootRouterEvent: RouterEvent = {
        id: 1,
        url: '/'
      };
      let isInRoot: boolean;
      isInRoot = recipesManagerService.isInRoot(rootRouterEvent);
      expect(isInRoot).toEqual(true);
    }));

  it('should set cuisine types for dropdown',
    inject([RecipesManagerService], (recipesManagerService: RecipesManagerService) => {
      const expectedCuisineTypes: MatSelectCuisineType[] = [
        { value: CuisineType.Polish, viewValue: CuisineType.Polish },
        { value: CuisineType.Italian, viewValue: CuisineType.Italian },
        { value: CuisineType.Chinese, viewValue: CuisineType.Chinese },
        { value: CuisineType.French, viewValue: CuisineType.French },
        { value: CuisineType.American, viewValue: CuisineType.American },
        { value: CuisineType.Asian, viewValue: CuisineType.Asian },
        { value: CuisineType.Japanese, viewValue: CuisineType.Japanese },
        { value: CuisineType.Other, viewValue: CuisineType.Other },
        { value: CuisineType.None, viewValue: CuisineType.None }
      ];
      let returnedCuisineTypes: MatSelectCuisineType[];
      returnedCuisineTypes = recipesManagerService.setCuisineTypesDropdownValues();
      expect(returnedCuisineTypes).toEqual(expectedCuisineTypes);
    }));

  it('should set difficulty levels for dropdown',
    inject([RecipesManagerService], (recipesManagerService: RecipesManagerService) => {
      const expectedDifficultyLevels: MatSelectDifficultyLevel[] = [
        { value: DifficultyLevel.Easy, viewValue: DifficultyLevel.Easy },
        { value: DifficultyLevel.Medium, viewValue: DifficultyLevel.Medium },
        { value: DifficultyLevel.Hard, viewValue: DifficultyLevel.Hard }];
      let returnedDifficultyLevels: MatSelectDifficultyLevel[];
      returnedDifficultyLevels = recipesManagerService.setDifficultyLevelsDropdownValues();
      expect(returnedDifficultyLevels).toEqual(expectedDifficultyLevels);
    }));

  it('should set category types for dropdown',
    inject([RecipesManagerService], (recipesManagerService: RecipesManagerService) => {
      const expectedCategoryTypes: MatSelectCategoryType[] = [
        { value: RecipeCategory.Soup, viewValue: RecipeCategory.Soup },
        { value: RecipeCategory.MainCourse, viewValue: RecipeCategory.MainCourse },
        { value: RecipeCategory.Dessert, viewValue: RecipeCategory.Dessert },
        { value: RecipeCategory.Drinks, viewValue: RecipeCategory.Drinks },
        { value: RecipeCategory.Cake, viewValue: RecipeCategory.Cake },
        { value: RecipeCategory.Other, viewValue: RecipeCategory.Other }];
      let returnedCategoryTypes: MatSelectCategoryType[];
      returnedCategoryTypes = recipesManagerService.setCategoryTypesDropdownValues();
      expect(returnedCategoryTypes).toEqual(expectedCategoryTypes);
    }));

  it('should change HTML tags to new line sign',
    inject([RecipesManagerService], (recipesManagerService: RecipesManagerService) => {
      const htmlTextToConvert: string = 'Lorem ipsum<br>lorem ipsum';
      const expextedConvertedText: string = 'Lorem ipsum\nlorem ipsum';
      let convertedText: string;
      convertedText = recipesManagerService.changeHtmlToNewLine(htmlTextToConvert);
      expect(convertedText).toEqual(expextedConvertedText);
    }));

  it('should call open snack bar',
    inject([RecipesManagerService, MatSnackBar],
      (recipesManagerService: RecipesManagerService, snackBar: MatSnackBar) => {
        spyOn(recipesManagerService.snackBar, 'open').and.callThrough();
        recipesManagerService.openSnackBar('message');
        expect(snackBar.open).toHaveBeenCalled();
      }));
});
