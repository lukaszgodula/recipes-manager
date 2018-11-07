import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService
  ) {
  }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.authStateCheck();
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.authStateCheck();
  }

}
