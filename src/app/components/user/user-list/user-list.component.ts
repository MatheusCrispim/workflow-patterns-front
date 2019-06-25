import { Component, OnInit } from '@angular/core';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { UserURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseListComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return UserURL.BASE;
  }

  getRouterURL(): string {
    return 'users';
  }

  getColumns(): string[] {
    return ['id', 'name', 'email', 'login', 'role'];
  }

  advancedSearch(): void {
    this.addSearch('name', 'Name', PropertyType.String, Comparison.Like);
    this.addSearch('email', 'Email', PropertyType.String, Comparison.Like);
    this.addSearch('login', 'Login', PropertyType.String, Comparison.Like);
  }

  protected postResult(): void {
    this.items.map(item => {});
    super.postResult();
  }
}
