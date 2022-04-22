import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorStr = '';
        if (error.error instanceof ErrorEvent) {
          errorStr = `Error Message: ${error.message}`;
        } else {
          errorStr = `Error Code: ${error.status}, Error Message: ${error.message}`;
        }

        return throwError(() => new Error(errorStr));
      })
    )
  }
}
