import { Component } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
