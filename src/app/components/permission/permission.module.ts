import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

import { AdvancedSearchModule } from '../../core/component/advanced-search/advanced-search.module';
import { AppLoadingModule } from '../../core/component/app-loading/loading.module';
import { MaterialModule } from '../../core/module/material.module';
import { ControlMessageModule } from '../../core/component/control-message/control-message.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { LoadingButtonModule } from '../../core/component/loading-button/loading-button.module';

import { PermissionRoutingModule } from './permission.routing';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';
import { PermissionListComponent } from './permission-list/permission-list.component';

@NgModule({
  declarations: [
    PermissionEditComponent,
    PermissionListComponent,
    PermissionViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MaterialModule,
    TranslateModule,
    AdvancedSearchModule,
    AppLoadingModule,
    ControlMessageModule,
    NgxPermissionsModule,
    LoadingButtonModule,
    NgxMaskModule.forRoot(),
    PermissionRoutingModule
  ]
})
export class PermissionModule {}
