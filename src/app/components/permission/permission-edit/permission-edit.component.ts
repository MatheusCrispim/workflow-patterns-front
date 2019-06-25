import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';
import { PermissionURL } from '../../../shared/url/url.domain';

import { format } from 'date-fns';

@Component({
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.css']
})
export class PermissionEditComponent extends BaseEditComponent
  implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, [])
    };
  }

  onSubmit() {
    super.onSubmit();
  }

  getServiceURL() {
    return PermissionURL.BASE;
  }

  getRouterURL() {
    return 'permissions';
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
