import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PermissionURL } from '../../../shared/url/url.domain';
import { BaseViewComponent } from '../../../core/interface/base-view.component';

@Component({
  selector: 'app-permission-view',
  templateUrl: './permission-view.component.html',
  styleUrls: ['./permission-view.component.css']
})
export class PermissionViewComponent extends BaseViewComponent
  implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL() {
    return PermissionURL.BASE;
  }

  getRouterURL() {
    return 'permissions';
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
