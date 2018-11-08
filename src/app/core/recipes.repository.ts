import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { apiUrl } from './constans/api-url';
import { AddIngredientRequest } from './models/add-ingredient-request';
import { AddRecipeRequest } from './models/add-recipe-request';
import { EditIngredientRequest } from './models/edit-ingredient-request';
import { EditRecipeRequest } from './models/edit-recipe-request';
import { Ingredient } from './models/ingredient';
import { IngredientListItem } from './models/ingredient-list-item';
import { Recipe } from './models/recipe';
import { RecipesListItem } from './models/recipes-list';

@Injectable()
export class RecipesRepository {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<RecipesListItem[]> {
    return this.http.get<RecipesListItem[]>(`${apiUrl}recipes`);
  }

  public getIngredients(): Observable<IngredientListItem[]> {
    return this.http.get<IngredientListItem[]>(`${apiUrl}ingredients`);
  }

  public getRecipeDetails(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${apiUrl}recipes/${id}`);
  }

  public addRecipe(recipe: AddRecipeRequest): Observable<Recipe> {
    return this.http.post<Recipe>(`${apiUrl}recipes/add`, recipe);
  }

  public editRecipe(recipe: EditRecipeRequest): Observable<Recipe> {
    return this.http.put<Recipe>(`${apiUrl}recipes/edit`, recipe);
  }

  public deleteRecipe(recipeId: number): Observable<string> {
    return this.http.delete<string>(`${apiUrl}recipes/${recipeId}`);
  }

  public addIngredient(ingredient: AddIngredientRequest): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${apiUrl}ingredients/add`, ingredient);
  }

  public deleteIngredient(ingredientId: number): Observable<null> {
    return this.http.delete<null>(`${apiUrl}ingredients/${ingredientId}`);
  }

  public editIngredient(ingredient: EditIngredientRequest): Observable<null> {
    return this.http.put<null>(`${apiUrl}ingredients/edit`, ingredient);
  }
}
