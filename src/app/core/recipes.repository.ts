import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { mockRecipesList } from 'src/mocks/mock-recipes-list';

@Injectable()
export class RecipesRepository {
  public getRecipes(): Observable<RecipesListItem[]> {
    return of(mockRecipesList).pipe(delay(500));
  }
}
