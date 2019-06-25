import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';
import { RoleURL } from '../../../shared/url/url.domain';
import { PermissionURL } from '../../../shared/url/url.domain';

import { format } from 'date-fns';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent extends BaseEditComponent implements OnInit {
  permissions: any[];

  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll(PermissionURL.BASE).subscribe(result => {
      this.permissions = result['items'];
    });
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, []),
      permissions: this.formBuilder.control(undefined, [])
    };
  }

  onSubmit() {
    super.onSubmit();
  }

  getServiceURL() {
    return RoleURL.BASE;
  }

  getRouterURL() {
    return 'roles';
  }

  isUpdatePartial(): boolean {
    return true;
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }

  private unmask(val) {
    return val ? val.replace(/\D+/g, '') : val;
  }

  protected getFormValue() {
    return super.getFormValue();
  }

  protected postGetItem() {
    super.postGetItem();
  }
}
