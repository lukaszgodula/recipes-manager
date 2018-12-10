import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AddIngredientRequest } from './models/add-ingredient-request';
import { AddRecipeRequest } from './models/add-recipe-request';
import { EditIngredientRequest } from './models/edit-ingredient-request';
import { EditRecipeRequest } from './models/edit-recipe-request';
import { Ingredient } from './models/ingredient';
import { IngredientListItem } from './models/ingredient-list-item';
import { Recipe } from './models/recipe';
import { RecipesListItem } from './models/recipes-list';
import { ShoppingListItem } from './models/shopping-list-item';
import { ShoppingListItemRequest } from './models/shopping-list-item-request';

@Injectable()
export class RecipesRepository {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<RecipesListItem[]> {
    return this.http.get<RecipesListItem[]>(`${environment.apiUrl}recipes`);
  }

  public getIngredients(): Observable<IngredientListItem[]> {
    return this.http.get<IngredientListItem[]>(`${environment.apiUrl}ingredients`);
  }

  public getRecipeDetails(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.apiUrl}recipes/${id}`);
  }

  public addRecipe(recipe: AddRecipeRequest): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.apiUrl}recipes/add`, recipe);
  }

  public editRecipe(recipe: EditRecipeRequest): Observable<Recipe> {
    return this.http.put<Recipe>(`${environment.apiUrl}recipes/edit`, recipe);
  }

  public deleteRecipe(recipeId: number): Observable<string> {
    return this.http.delete<string>(`${environment.apiUrl}recipes/${recipeId}`);
  }

  public addIngredient(ingredient: AddIngredientRequest): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${environment.apiUrl}ingredients/add`, ingredient);
  }

  public deleteIngredient(ingredientId: number): Observable<null> {
    return this.http.delete<null>(`${environment.apiUrl}ingredients/${ingredientId}`);
  }

  public editIngredient(ingredient: EditIngredientRequest): Observable<null> {
    return this.http.put<null>(`${environment.apiUrl}ingredients/edit`, ingredient);
  }

  public getShoppingListItems(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>(`${environment.apiUrl}shopping-list-items`);
  }

  public addShoppingListItem(item: ShoppingListItemRequest): Observable<ShoppingListItem> {
    return this.http.post<ShoppingListItem>(`${environment.apiUrl}shopping-list-items/add`, item);
  }

  public deleteShoppingListItem(itemId: number): Observable<null> {
    return this.http.delete<null>(`${environment.apiUrl}shopping-list-items/${itemId}`);
  }
}
