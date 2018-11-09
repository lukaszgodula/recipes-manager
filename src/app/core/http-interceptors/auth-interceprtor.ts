import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, mergeMap, take } from 'rxjs/operators';

import { RecipesManagerActionTypes, ThrowHttpError } from '../+state/recipes-manager.actions';
import { RecipesManagerState } from '../+state/recipes-manager.interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AngularFireAuth,
    private store: Store<RecipesManagerState>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.idToken.pipe(
      filter(token => token !== null),
      take(1),
      mergeMap((token: string) => {
        if (token) {
          request = request.clone({ setHeaders: { Authorization: `${token}` } });
        }
        return next.handle(request)
          .pipe(catchError(response => {
            if (response instanceof HttpErrorResponse) {
              return this.handleResponseError(response);
            }
          }));
      }));
  }

  private handleResponseError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      console.error('An error occurred:', response.error.message);
      this.dispatchError(response);
    } else {
      this.dispatchError(response);
      console.error(`Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
    }
    return throwError('Something bad happened; please refresh app.');
  }

  private dispatchError(response: HttpErrorResponse) {
    this.store.dispatch<ThrowHttpError>({
      type: RecipesManagerActionTypes.ThrowHttpError,
      payload: {
        errorMessage: response.error
      }
    });
  }
}
