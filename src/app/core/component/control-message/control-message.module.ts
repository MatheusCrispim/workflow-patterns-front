import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ControlMessagesComponent } from './control-message.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule],
  exports: [ControlMessagesComponent],
  declarations: [ControlMessagesComponent],
  providers: []
})
export class ControlMessageModule {}
