import { Component, OnInit } from '@angular/core';

import { PropertyType } from '../../../core/domain/property-type.domain';
import { Comparison } from '../../../core/domain/comparison.domain';

import { BaseListComponent } from '../../../core/interface/base-list.component';
import { TaskURL } from '../../../shared/url/url.domain';
import { format } from 'date-fns';
import { CrudService } from '../../../core/service/crud.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent extends BaseListComponent implements OnInit {
  constructor(
    private crudService: CrudService
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

  sendAction(id, action) {
    console.log(action);
    this.crudService.updatePartial(TaskURL.BASE, id, { "taskStateAction": action }).subscribe(resulte => {
      this.notification.updateSuccess();
      this.listItems();
    }, error => {
      this.notification.error('Erro ao trocar o estado');
    });
  }

   utilIN(value: string, ...list: string[]) {
    for (var i = 0; i < list.length; i++) {
      if (value == list[i])
        return true;
    }
    return false;
  }
}
