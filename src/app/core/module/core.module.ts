import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { NotificationService } from '../service/notification.service';
import { SearchService } from '../service/search.service';
import { TranslateService } from '../service/translate.service';
import { DeleteConfirmationModule } from '../component/delete-confirmation/delete-confirmation.module';
import { MaterialModule } from './material.module';

import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { MatPaginatorIntl } from '@angular/material';

import { PaginatorIntlFactory } from '../factory/paginator-intl.factory';
import { AuthService } from '../service/auth.service';

@NgModule({
  declarations: [],
  exports: [MaterialModule, DeleteConfirmationModule],
  imports: [CommonModule],
  providers: [
    CrudService,
    NotificationService,
    SearchService,
    TranslateService,
    AuthService,
    {
      provide: MatPaginatorIntl,
      deps: [NgxTranslateService],
      useFactory: (ngxTranslateService: NgxTranslateService) =>
        PaginatorIntlFactory.PaginatorIntl(ngxTranslateService)
    }
  ]
})
export class CoreModule {}
