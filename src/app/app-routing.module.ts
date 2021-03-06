import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'recipe/:id',
    canActivate: [AuthGuard],
    loadChildren: './recipe-details/recipe-details.module#RecipeDetailsModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    loadChildren: './add-recipe/add-recipe.module#AddRecipeModule'
  },
  {
    path: 'manage-ingredients',
    canActivate: [AuthGuard],
    loadChildren: './manage-ingredients/manage-ingredients.module#ManageIngredientsModule'
  },
  {
    path: 'shopping-list',
    canActivate: [AuthGuard],
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
