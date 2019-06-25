import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedinGuard } from '../../shared/security/loggedin.guard';
import { ChangePasswordComponent } from './change-password.component';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
    canActivate: [LoggedinGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePasswordRoutingModule {}
