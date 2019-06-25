import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityUtil } from '../../core/security/security.util';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('task')]
      }
    }
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('task')]
      }
    }
  },
  {
    path: 'view/:id',
    component: TaskViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('task')]
      }
    }
  },
  {
    path: 'create',
    component: TaskEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionDelete('task')]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
