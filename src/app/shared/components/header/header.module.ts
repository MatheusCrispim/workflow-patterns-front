import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../../core/module/material.module';
import { HeaderComponent } from './header.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SelectLanguageModule } from '../select-language/select-language.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    NgxPermissionsModule,
    SelectLanguageModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule {}
