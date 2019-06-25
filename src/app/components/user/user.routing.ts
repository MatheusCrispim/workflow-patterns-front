import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityUtil } from '../../core/security/security.util';

import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('user')]
      }
    }
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('user')]
      }
    }
  },
  {
    path: 'view/:id',
    component: UserViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('user')]
      }
    }
  },
  {
    path: 'create',
    component: UserEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionDelete('user')]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
