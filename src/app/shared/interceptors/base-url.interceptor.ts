import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  url = environment.baseUrl;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedRequest = this.updateRequest(request);
    return next.handle(updatedRequest);
  }

  updateRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      url: `${this.url}${request.url}`
    })
  }
}
