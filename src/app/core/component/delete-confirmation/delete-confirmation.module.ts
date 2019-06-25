import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { DeleteConfirmationComponent } from './delete-confirmation.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [DeleteConfirmationComponent],
  declarations: [DeleteConfirmationComponent],
  entryComponents: [DeleteConfirmationComponent],
  providers: []
})
export class DeleteConfirmationModule {}
