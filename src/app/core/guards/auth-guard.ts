import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AngularFireAuth
  ) {
  }

  canActivate(): Observable<boolean> | boolean {
    return this.auth.authState.pipe(map(User => {
      return (User) ? true : false;
    }));
  }
}
