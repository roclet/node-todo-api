import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  // Refresh Token Subject tracks the current token, or is null if no token is currently
  // available (e.g. refresh pending).
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = sessionStorage.getItem('isLogin');
    if (currentUser) {
      return next.handle(this.injectToken(request));
    }
    else {
      request = request.clone({
        setHeaders: {}
      });
      return next.handle(request);
    }
  }
  injectToken(request: HttpRequest<any>) {
    return request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + `${sessionStorage.getItem('userSession')}`
      }
    });
  }
}
