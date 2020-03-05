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

import { TaskRoutingModule } from './task.routing';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserSelectComponent } from '../user/user-select/user-select.component';

@NgModule({
  declarations: [TaskEditComponent, TaskListComponent, TaskViewComponent, UserSelectComponent],
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
    TaskRoutingModule
  ],
  entryComponents:[UserSelectComponent]
})
export class TaskModule { }
