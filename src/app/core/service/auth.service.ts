import { Injectable } from '@angular/core';

import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

import { BaseService } from '../../core/interface/base.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { NotificationService } from './notification.service';
import { SERVER_URL, LoginURL } from '../../shared/url/url.domain';
import { Observable } from 'rxjs';
import { AppInjector } from '../../app.injector';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export const STORAGE_KEY = 'User';

@Injectable()
export class AuthService extends BaseService {
  /**
   * Service to manage permissions.
   */
  private permissionService: NgxPermissionsService = AppInjector.get(
    NgxPermissionsService
  );

  /**
   * Service to notifications.
   */
  private notification: NotificationService = AppInjector.get(
    NotificationService
  );

  /**
   * Service to translate messages.
   */
  private translate: TranslateService = AppInjector.get(TranslateService);

  /**
   * Service to manage redirects.
   */
  public router: Router = AppInjector.get(Router);

  constructor() {
    super();
  }

  /**
   * Gets the User.
   */
  getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  /**
   * Verify if the User is logged.
   *
   * @returns {boolean}
   */
  isLogged(): boolean {
    return this.getUser() !== null;
  }

  /**
   * Get token User.
   *
   * @returns {string}
   */
  protected getToken(type: string): string {
    const user = this.getUser();
    if (user) {
      return this.getUser()[type];
    }
    return null;
  }

  /**
   * Get token access User().
   *
   * @returns {string}
   */
  getAccessToken(): string {
    return this.getToken('token');
  }

  /**
   * Get refresh token User().
   *
   * @returns {string}
   */
  getRefreshToken(): string {
    return this.getToken('refreshToken');
  }

  /**
   * Logout User().
   *
   */
  logout(redirectTo: string = '/login'): void {
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate([redirectTo]);
  }

  /**
   * Update token access and refresh token.
   *
   * @returns {Observable<string>}
   */
  refreshToken(): Observable<string> {
    return this.http
      .post(SERVER_URL + LoginURL.REFRESH_TOKEN, {
        token: this.getRefreshToken()
      })
      .map((result: any) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        this.permissionService.loadPermissions(this.getUser()().permissions);
        return this.getUser()().token;
      })
      .catch(error => {
        this.notification.warning(
          this.translate.instant('system.session.expired')
        );
        this.logout();
        return new EmptyObservable<Response>();
      });
  }
}
