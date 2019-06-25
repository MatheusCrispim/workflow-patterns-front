import { MatPaginatorIntl } from '@angular/material';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

import { TranslateService } from '../service/translate.service';

export class PaginatorIntlFactory {
  static PaginatorIntl(translateService: NgxTranslateService) {
    const paginatorIntl = new MatPaginatorIntl();
    PaginatorIntlFactory.translateLabelsPaginator(
      translateService,
      paginatorIntl
    );
    TranslateService.observer.subscribe((result: any) => {
      PaginatorIntlFactory.translateLabelsPaginator(
        translateService,
        paginatorIntl
      );
    });
    return paginatorIntl;
  }

  private static translateLabelsPaginator(
    translateService: NgxTranslateService,
    paginatorIntl: MatPaginatorIntl
  ) {
    translateService
      .get('system.pagination.items-page')
      .subscribe((message: string) => {
        paginatorIntl.itemsPerPageLabel = message;
      });

    translateService
      .get('system.pagination.next-page')
      .subscribe((message: string) => {
        paginatorIntl.nextPageLabel = message;
      });

    translateService
      .get('system.pagination.previous-page')
      .subscribe((message: string) => {
        paginatorIntl.previousPageLabel = message;
      });

    translateService
      .get('system.pagination.first-page')
      .subscribe((message: string) => {
        paginatorIntl.firstPageLabel = message;
      });

    translateService
      .get('system.pagination.last-page')
      .subscribe((message: string) => {
        paginatorIntl.lastPageLabel = message;
      });

    paginatorIntl.changes.next();
  }
}
