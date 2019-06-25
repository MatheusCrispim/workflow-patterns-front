import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { UserService } from '../service/user.service';

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): boolean {
    return this.handleLogin();
  }

  canLoad(route: Route): boolean {
    return this.handleLogin();
  }

  handleLogin() {
    if (this.userService.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
