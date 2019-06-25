import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.configTranslate();
  }

  private configTranslate(): void {
    let browserLang = localStorage.getItem('lang');
    if (!browserLang) {
      browserLang = this.translate.getBrowserLang();
    }

    this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }
}
