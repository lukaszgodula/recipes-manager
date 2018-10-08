import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';
import { recipes } from 'src/mocks/mock-recipes';
import { mockRecipesList } from 'src/mocks/mock-recipes-list';

@Injectable()
export class RecipesRepository {
  public getRecipes(): Observable<RecipesListItem[]> {
    return of(mockRecipesList).pipe(delay(500));
  }

  public getRecipeDetails(id: number): Observable<Recipe> {
    return of(recipes.find(r => r.id === id)).pipe(delay(400));
  }
}
