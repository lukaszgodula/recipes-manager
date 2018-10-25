import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { apiUrl } from './constans/api-url';
import { AddIngredientRequest } from './models/add-ingredient-request';
import { AddRecipeRequest } from './models/add-recipe-request';
import { Ingredient } from './models/ingredient';
import { Recipe } from './models/recipe';
import { RecipesListItem } from './models/recipes-list';

@Injectable()
export class RecipesRepository {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<RecipesListItem[]> {
    return this.http.get<RecipesListItem[]>(`${apiUrl}recipes`);
  }

  public getRecipeDetails(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${apiUrl}recipes/${id}`);
  }

  public addRecipe(recipe: AddRecipeRequest): Observable<Recipe> {
    return this.http.post<Recipe>(`${apiUrl}recipes/add`, recipe);
  }

  public addIngredient(ingredient: AddIngredientRequest): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${apiUrl}ingredients/add`, ingredient);
  }
}
