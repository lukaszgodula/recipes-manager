import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth-guard';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: RecipesListComponent
  },
  {
    path: 'recipe/:id',
    canLoad: [AuthGuard],
    loadChildren: './recipe-details/recipe-details.module#RecipeDetailsModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
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
