import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppInjector } from '../../app.injector';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';

declare var jQuery: any;

/**
 * The 'BaseComponent' class provides the common API for all the components
 * in the system.
 *
 * Operations like notification, navigation and other are already implemented.
 *
 * All components MUST extend this class.
 */
export abstract class BaseComponent implements OnInit {
  /**
   * Provides the navigation and url manipulation capabilities.
   *
   * @type {Router}
   */
  protected router: Router = AppInjector.get(Router);

  /**
   * Module for user notification.
   *
   * @type {NotificationModule}
   */
  protected notificationService: NotificationService = AppInjector.get(
    NotificationService
  );

  /**
   * Module for i18n.
   *
   * @type {TranslateService}
   */
  protected translateService: TranslateService = AppInjector.get(
    TranslateService
  );

  /**
   * Constructor.
   */
  constructor() {}

  /**
   * On Init of the component.
   */
  ngOnInit(): void {}

  /**
   * Navigates to the path provided.
   *
   * @param {any[]} urls
   */
  protected navigate(urls: any[]): void {
    this.router.navigate(urls);
  }

  /**
   * Gets the notification module.
   *
   * @returns {NotificationModule}
   */
  get notification() {
    return this.notificationService;
  }

  /**
   * Gets the translated message.
   *
   * @returns {string}
   */
  protected translate(code: string): string {
    return this.translateService.instant(code);
  }
}
