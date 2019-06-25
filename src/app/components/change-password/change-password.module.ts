import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../core/module/material.module';
import { ControlMessageModule } from '../../core/component/control-message/control-message.module';
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from './change-password.routing';
import { LoadingButtonModule } from '../../core/component/loading-button/loading-button.module';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    ChangePasswordRoutingModule,
    MaterialModule,
    TranslateModule,
    ControlMessageModule,
    LoadingButtonModule
  ]
})
export class ChangePasswordModule {}
