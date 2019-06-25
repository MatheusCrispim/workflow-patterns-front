import { Component, OnInit } from '@angular/core';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { TaskURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent extends BaseListComponent implements OnInit {
  constructor() {
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
}
