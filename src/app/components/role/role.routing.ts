import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityUtil } from '../../core/security/security.util';

import { RoleListComponent } from './role-list/role-list.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleViewComponent } from './role-view/role-view.component';

const routes: Routes = [
  {
    path: '',
    component: RoleListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('role')]
      }
    }
  },
  {
    path: 'edit/:id',
    component: RoleEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('role')]
      }
    }
  },
  {
    path: 'view/:id',
    component: RoleViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('role')]
      }
    }
  },
  {
    path: 'create',
    component: RoleEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionDelete('role')]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
