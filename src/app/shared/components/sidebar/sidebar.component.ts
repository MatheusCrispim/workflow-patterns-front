import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../menu-items/menu-items';
import { MatTableDataSource } from '@angular/material';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy, OnInit {
  user: any;
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;
  filter: Boolean;
  filterInput: String;
  dataSource: any;

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  private _mobileQueryListener: () => void;
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  subclickEvent() {
    this.status = true;
  }
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private userService: UserService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(): void {
    this.userService.logout();
  }

  isSelected(event: any): void {
    const currentElement =
      event.target.nodeName === 'A' ? event.target : event.target.parentNode;
    if (currentElement.classList.contains('selected')) {
      currentElement.classList.remove('selected');
      return;
    }
    currentElement.classList.add('selected');
    return;
  }
}
