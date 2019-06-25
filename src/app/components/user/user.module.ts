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

import { UserRoutingModule } from './user.routing';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserEditComponent, UserListComponent, UserViewComponent],
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
    UserRoutingModule
  ]
})
export class UserModule {}
