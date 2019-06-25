import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';
import { UserURL } from '../../../shared/url/url.domain';
import { RoleURL } from '../../../shared/url/url.domain';

import { format } from 'date-fns';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends BaseEditComponent implements OnInit {
  roles: any[];

  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll(RoleURL.BASE).subscribe(result => {
      this.roles = result['items'];
    });
  }

  getFormControls(): Object {
    if (!this.isEditMode) {
      return {
        id: this.formBuilder.control(undefined, []),
        newPassword: this.formBuilder.control(undefined, []),
        name: this.formBuilder.control(undefined, [Validators.required]),
        email: this.formBuilder.control(undefined, [Validators.required]),
        login: this.formBuilder.control(undefined, [Validators.required]),
        role: this.formBuilder.control(undefined, [])
      };
    }
    return {
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, [Validators.required]),
      email: this.formBuilder.control(undefined, [Validators.required]),
      login: this.formBuilder.control(undefined, [Validators.required]),
      role: this.formBuilder.control(undefined, [])
    };
  }

  onSubmit() {
    super.onSubmit();
  }

  getServiceURL() {
    return UserURL.BASE;
  }

  getRouterURL() {
    return 'users';
  }

  isUpdatePartial(): boolean {
    return true;
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }

  protected postGetItem() {
    super.postGetItem();
  }
}
