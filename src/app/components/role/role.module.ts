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

import { RoleRoutingModule } from './role.routing';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  declarations: [RoleEditComponent, RoleListComponent, RoleViewComponent],
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
    RoleRoutingModule
  ]
})
export class RoleModule {}
