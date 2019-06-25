import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoggedinGuard } from './shared/security/loggedin.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedinGuard],
    canActivateChild: [NgxPermissionsGuard],
    children: [
      {
        path: 'users',
        loadChildren: 'app/components/user/user.module#UserModule',
        canLoad: [LoggedinGuard]
      },
      {
        path: 'tasks',
        loadChildren: 'app/components/task/task.module#TaskModule',
        canLoad: [LoggedinGuard]
      },
      {
        path: 'permissions',
        loadChildren:
          'app/components/permission/permission.module#PermissionModule',
        canLoad: [LoggedinGuard]
      },
      {
        path: 'roles',
        loadChildren: 'app/components/role/role.module#RoleModule',
        canLoad: [LoggedinGuard]
      },
      {
        path: 'password/change',
        loadChildren:
          'app/components/change-password/change-password.module#ChangePasswordModule'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: 'app/components/login/login.module#LoginModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
