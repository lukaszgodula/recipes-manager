import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipesListItem } from 'src/app/core/models/recipes-list';

import { apiUrl } from './constans/api-url';

@Injectable()
export class RecipesRepository {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<RecipesListItem[]> {
    return this.http.get<RecipesListItem[]>(`${apiUrl}recipes`);
  }

  public getRecipeDetails(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${apiUrl}recipes/${id}`);
  }
}
