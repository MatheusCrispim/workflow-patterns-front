import { NgxPermissionsService } from 'ngx-permissions';

import { STORAGE_KEY } from '../service/auth.service';

export class PermissionLoadFactorty {
  static loadPermissions() {
    return (permissionsService: NgxPermissionsService) => {
      return () => {
        const user = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return permissionsService.loadPermissions(
          user ? user.permissions || [] : []
        );
      };
    };
  }
}
