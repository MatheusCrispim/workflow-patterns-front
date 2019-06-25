import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../module/material.module';
import { SimpleSearchComponent } from './simple-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateModule, FormsModule],
  exports: [SimpleSearchComponent],
  declarations: [SimpleSearchComponent],
  providers: []
})
export class SimpleSearchModule {}
