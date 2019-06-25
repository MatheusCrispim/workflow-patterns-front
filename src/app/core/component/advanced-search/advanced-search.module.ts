import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { AdvancedSearchComponent } from './advanced-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AdvancedSearchComponent],
  declarations: [AdvancedSearchComponent],
  providers: []
})
export class AdvancedSearchModule {}
