import { Component, OnInit } from '@angular/core';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { RoleURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent extends BaseListComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return RoleURL.BASE;
  }

  getRouterURL(): string {
    return 'roles';
  }

  getColumns(): string[] {
    return ['id', 'name', 'description'];
  }

  advancedSearch(): void {
    this.addSearch('name', 'Name', PropertyType.String, Comparison.Like);
    this.addSearch(
      'description',
      'Description',
      PropertyType.String,
      Comparison.Like
    );
  }

  protected postResult(): void {
    this.items.map(item => {});
    super.postResult();
  }
}
