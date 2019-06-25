import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../core/module/material.module';
import { LoadingButtonModule } from '../../core/component/loading-button/loading-button.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { ControlMessageModule } from '../../core/component/control-message/control-message.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MaterialModule,
    TranslateModule,
    LoadingButtonModule,
    LoginRoutingModule,
    ControlMessageModule
  ]
})
export class LoginModule {}
