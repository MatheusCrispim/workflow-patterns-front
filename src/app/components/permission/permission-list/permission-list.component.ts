import { Component, OnInit } from '@angular/core';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { PermissionURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent extends BaseListComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return PermissionURL.BASE;
  }

  getRouterURL(): string {
    return 'permissions';
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
