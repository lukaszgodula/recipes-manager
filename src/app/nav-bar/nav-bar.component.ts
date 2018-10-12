import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import { RecipesManagerService } from 'src/app/core/services/recipes-manager.service';
import { StoreUtil } from 'src/app/core/utils/store.util';

import { FromRecipesManagerState } from '../core/+state/recipes-manager.selectors';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isInRoot: boolean;
  public isLoggedIn: Observable<boolean>;

  constructor(private router: Router,
    private recipesManagerService: RecipesManagerService,
    private authService: AuthService,
    private store: Store<RecipesManagerState>) {
    this.isLoggedIn = StoreUtil.select(this.store, FromRecipesManagerState.isUserLoggedIn);
  }

  ngOnInit() {
    this.setRouteFlags();

  }

  public goBack(): void {
    this.router.navigate(['../']);
  }

  public logOut(): void {
    this.authService.logOut();
  }

  private setRouteFlags(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isInRoot = this.recipesManagerService.isInRoot(event);
      }
    });
  }

}
