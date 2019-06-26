import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';
import { TaskURL } from '../../../shared/url/url.domain';

import { format } from 'date-fns';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent extends BaseEditComponent implements OnInit {

  taskStates: any = []

  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.taskStates = this.enumItemsService.getTaskStateTask()
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      date: this.formBuilder.control(undefined, []),
      taskState: this.formBuilder.control(undefined, [])
    };
  }

  onSubmit() {
    super.onSubmit();
  }

  getServiceURL() {
    return TaskURL.BASE;
  }

  getRouterURL() {
    return 'tasks';
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
