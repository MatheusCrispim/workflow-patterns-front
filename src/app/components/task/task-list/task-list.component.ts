import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { TaskURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';
import { CrudService } from '../../../core/service/crud.service';
import { UserSelectComponent } from '../../user/user-select/user-select.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent extends BaseListComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return TaskURL.BASE;
  }

  getRouterURL(): string {
    return 'tasks';
  }

  getColumns(): string[] {
    return ['id', 'date', 'taskState'];
  }

  advancedSearch(): void {
    this.addSearch('date', 'Date', PropertyType.String, Comparison.Like);
    this.addSearch('taskState', 'State', PropertyType.String, Comparison.Like);
  }

  protected postResult(): void {
    this.items.map(item => {});
    super.postResult();
  }

  assignTaskToUser(taskId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      taskId: taskId
    }
    this.dialog.open(UserSelectComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(()=>{
      this.listItems();
    })
  }
}
