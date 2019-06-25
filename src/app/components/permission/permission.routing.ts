import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityUtil } from '../../core/security/security.util';

import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('permission')]
      }
    }
  },
  {
    path: 'edit/:id',
    component: PermissionEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('permission')]
      }
    }
  },
  {
    path: 'view/:id',
    component: PermissionViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('permission')]
      }
    }
  },
  {
    path: 'create',
    component: PermissionEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionDelete('permission')]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule {}
