import {
  throwError as observableThrowError,
  BehaviorSubject,
  Observable
} from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { TranslateService } from './translate.service';
import { LoginURL } from '../../shared/url/url.domain';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (req.url.includes(LoginURL.BASE)) {
      return next.handle(req);
    }

    return next
      .handle(this.addToken(req, this.authService.getAccessToken()))
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>error).status) {
              case 401:
                return this.handle401Error(req, next);
              default:
                return observableThrowError(error);
            }
          } else {
            return observableThrowError(error);
          }
        })
      );
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes(LoginURL.REFRESH_TOKEN)) {
      this.isRefreshingToken = false;
      return this.logout();
    }

    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      this.tokenSubject.next(null);

      return this.authService
        .refreshToken()
        .switchMap(newToken => {
          if (newToken) {
            this.tokenSubject.next(newToken);
            return next.handle(
              this.addToken(this.getNewRequest(req), newToken)
            );
          }

          return next.handle(this.addToken(this.getNewRequest(req), newToken));
        })
        .catch(error => {
          return this.logout();
        })
        .finally(() => {
          this.isRefreshingToken = false;
        });
    } else {
      return this.tokenSubject
        .filter(token => token != null)
        .take(1)
        .switchMap(token => {
          return next.handle(this.addToken(this.getNewRequest(req), token));
        });
    }
  }

  private getNewRequest(req: HttpRequest<any>) {
    return this.addLanguage(
      this.addToken(req, this.authService.getAccessToken())
    );
  }

  private addLanguage(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: { 'Accept-Language': this.translate.getLang() }
    });
  }

  private logout() {
    return observableThrowError('logout');
  }
}
