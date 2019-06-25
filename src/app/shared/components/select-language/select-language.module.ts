import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { SelectLanguageComponent } from './select-language.component';
import { MaterialModule } from '../../../core/module/material.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule],
  declarations: [SelectLanguageComponent],
  exports: [SelectLanguageComponent],
  providers: []
})
export class SelectLanguageModule {}
