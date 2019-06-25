import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
  SimpleSnackBar
} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

/**
 * Module for user notification by 'toast' style.
 */
@Injectable()
export class NotificationService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  /**
   * Constructor.
   *
   * @param {TranslateService} translateService
   * @param {MatSnackBar} snackBar
   */
  constructor(
    public translateService: TranslateService,
    public snackBar: MatSnackBar
  ) {}

  /* Defaults */
  success() {
    this.successText(
      this.translateService.instant('operations.success.message')
    );
  }

  successText(text: string) {
    this.openSnackBar(text, { style: 'success' });
  }

  error(text: string) {
    this.openSnackBar(text, { style: 'error' });
  }

  warning(text: string) {
    this.openSnackBar(text, { style: 'warning' });
  }

  info(text: string) {
    this.openSnackBar(text, { style: 'info' });
  }

  /* CRUD */
  insertSuccess() {
    this.translateService
      .get('operations.insert.success')
      .subscribe((message: string) => {
        this.successText(message);
      });
  }

  insertError() {
    this.translateService
      .get('operations.insert.error')
      .subscribe((message: string) => {
        this.error(message);
      });
  }

  updateSuccess() {
    this.translateService
      .get('operations.update.success')
      .subscribe((message: string) => {
        this.successText(message);
      });
  }

  updateError() {
    this.translateService
      .get('operations.update.error')
      .subscribe((message: string) => {
        this.error(message);
      });
  }

  saveSuccess() {
    this.translateService
      .get('operations.save.success')
      .subscribe((message: string) => {
        this.successText(message);
      });
  }

  saveError() {
    this.translateService
      .get('operations.save.error')
      .subscribe((message: string) => {
        this.error(message);
      });
  }

  deleteSuccess() {
    this.translateService
      .get('operations.delete.success')
      .subscribe((message: string) => {
        this.successText(message);
      });
  }

  deleteError() {
    this.translateService
      .get('operations.delete.error')
      .subscribe((message: string) => {
        this.successText(message);
      });
  }

  waitInternet(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Sem conexão com internet. Aguarde...');
  }

  public openSnackBar(
    message: string,
    options: { duration?; horizontalPosition?; verticalPosition?; style? } = {}
  ) {
    this.translateService
      .get('system.close')
      .subscribe((messageClose: string) => {
        this.snackBar.open(message, messageClose, {
          duration: options.duration || 5000,
          horizontalPosition:
            options.horizontalPosition || this.horizontalPosition,
          verticalPosition: options.verticalPosition || this.verticalPosition,
          panelClass: options.style ? [options.style] : []
        });
      });
  }
}
