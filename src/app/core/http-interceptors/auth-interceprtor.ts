import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { filter, mergeMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AngularFireAuth
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.idToken.pipe(
      filter(token => token !== null),
      take(1),
      mergeMap((token: string) => {
        if (token) {
          request = request.clone({ setHeaders: { Authorization: `${token}` } });
        }
        return next.handle(request);
      }));
  }
}
