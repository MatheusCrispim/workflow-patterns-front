import { Injectable } from '@angular/core';

import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { MatPaginatorIntl } from '@angular/material';

import { Subject, Observable } from 'rxjs';

@Injectable()
export class TranslateService {
  protected static subject: Subject<any> = new Subject<any>();

  constructor(
    private translate: NgxTranslateService,
    private paginatorIntl: MatPaginatorIntl
  ) {}

  public setLang(lang): void {
    localStorage.setItem('lang', String(lang));
    this.translate.use(lang).subscribe(result => {
      this.notifyAll(result);
    });
  }

  public getLang() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      return lang;
    }
    return this.translate.getBrowserLang();
  }

  private notifyAll(result) {
    TranslateService.subject.next(result);
  }

  static get observer(): Observable<any> {
    return TranslateService.subject.asObservable();
  }
}
