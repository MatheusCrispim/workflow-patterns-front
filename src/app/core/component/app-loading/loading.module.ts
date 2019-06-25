import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoadingComponent } from './loading.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [AppLoadingComponent],
  declarations: [AppLoadingComponent],
  providers: []
})
export class AppLoadingModule {}
