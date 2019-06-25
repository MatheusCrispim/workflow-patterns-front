import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../module/material.module';
import { LoadingButtonComponent } from './loading-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [LoadingButtonComponent],
  declarations: [LoadingButtonComponent],
  providers: []
})
export class LoadingButtonModule {}
