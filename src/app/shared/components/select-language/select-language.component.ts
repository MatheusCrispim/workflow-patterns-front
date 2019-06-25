import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../../../core/service/translate.service';
import { REGIONS } from '../../domain/select-language.domain';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {
  lang: string;
  urlFlag: string;
  alt: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.lang = this.translateService.getLang();
    this.updateDomain();
  }

  public setLang(lang: string): void {
    this.lang = lang;
    this.translateService.setLang(lang);
    this.updateDomain();
  }

  private updateDomain() {
    this.urlFlag = REGIONS[this.lang].FLAG_LINK;
    this.alt = REGIONS[this.lang].ALT;
  }
}
