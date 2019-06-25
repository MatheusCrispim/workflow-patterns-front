import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskURL } from '../../../shared/url/url.domain';
import { BaseViewComponent } from '../../../core/interface/base-view.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent extends BaseViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL() {
    return TaskURL.BASE;
  }

  getRouterURL() {
    return 'tasks';
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
