import { OnInit, ViewChild, RendererFactory2 } from '@angular/core';

import {
  MatDialog,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from '@angular/material';

import { BaseModelComponent } from './base-model.component';
import { DeleteConfirmationComponent } from '../component/delete-confirmation/delete-confirmation.component';

import { AppInjector } from '../../app.injector';
import { PropertyType } from '../domain/property-type.domain';
import { Comparison } from '../domain/comparison.domain';
import { TranslateService } from '../service/translate.service';

/**
 * The 'BaseListComponent' provides the common API for all list components.
 *
 * Service, operations, searches, navigations are all available.
 *
 * All list components MUST extend this class.
 *
 * @extends BaseModelComponent
 *
 * @property {DeleteConfirmationComponent}  deleteConfirmation  - component to confirm the remove operation.
 * @property {any}                          items               - items to list.
 * @property {any}                          removeId            - controls the ID to be removed.
 */
export abstract class BaseListComponent extends BaseModelComponent
  implements OnInit {
  /**
   * Paginator of Material Design.
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Sort component of Material Design.
   */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Dialog service of Material Design.
   */
  protected dialogService: MatDialog = AppInjector.get(MatDialog);

  /**
   * Service for create elements dynamics html.
   */
  protected rendererFactory: RendererFactory2 = AppInjector.get(
    RendererFactory2
  );

  /**
   * Items to list.
   *
   * @type {Array}
   */
  public items: any = [];

  /**
   * ID to be removed.
   *
   * @type {any}
   */
  protected removeId: any;

  /**
   * Total pages of items.
   *
   * @type {number}
   */
  public totalPages = 1;

  /**
   * Current page of pagination.
   *
   * @type {number}
   */
  public currentPage = 1;

  /**
   * Current column of ordering.
   *
   * @type {String}
   */
  protected currentColumn: String;

  /**
   * Current sort of ordering.
   *
   * @type {String}
   */
  protected currentSort: String;

  /**
   * Current text of search.
   *
   * @type {String}
   */
  public currentSearch: String;

  /**
   * Current number of paginate.
   *
   * @type {number}
   */
  protected currentPageSize: Number = 10;

  /**
   * Current object of filter.
   *
   * @type {String}
   */
  protected currentFilter: Array<any> = [];

  /**
   * Current object of filter.
   *
   * @type {boolean}
   */
  public loading: boolean = true;

  /**
   * Page size options.
   */
  protected pageSizeOptions: number[];

  /**
   * Material table data source.
   */
  public dataSource: any;

  /**
   * Columns to be displayed on table.
   */
  public displayedColumns: string[];

  /**
   * Properties to be included on text search.
   *
   * @type {any[]}
   */
  public searchProperties: any[] = [];

  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * On Init of the component.
   *
   * List all items by default.
   */
  ngOnInit(): void {
    super.ngOnInit();

    this.initConfigTable();

    this.initSearch();

    this.listItems();
  }

  /**
   * Configure the list table.
   */
  initConfigTable(): void {
    this.displayedColumns = [...this.getColumns(), 'actions'];
    this.pageSizeOptions = this.setPageSizeOptions();
  }

  /**
   * Initializes the search.
   */
  initSearch(): void {
    this.advancedSearch();
  }

  /**
   * If the component will use a advanced search, it must override this method to
   * include the properties to be use in the advanced search.
   *
   * It should call "addSearch" method only.
   */
  protected advancedSearch(): void {}

  /**
   * Adds a property into the advanced search.
   *
   * @param {string} name
   * @param {string} label
   * @param {PropertyType} type
   * @param {Comparison} comparison
   */
  protected addSearch(
    name: string,
    label: string,
    type: PropertyType,
    comparison: Comparison
  ) {
    this.searchProperties.push({ name, label, type, comparison });
  }

  /**
   * Gets the columns.
   *
   * @returns {string[]}
   */
  abstract getColumns(): string[];

  /**
   * Gets all items and fills the list.
   */
  listItems(): void {
    this.service
      .search(
        this.getServiceURL(),
        this.getPaginationParams(),
        this.currentFilter
      )
      .subscribe(
        result => {
          this.totalPages = result.totalPages;
          this.items = result.items;
          this.postResult();
          this.loading = false;
        },
        error => {
          this.notification.error(error.error.message);
          this.loading = false;
        }
      );
  }

  /**
   * Executes after the result of list items.
   */
  protected postResult(): void {
    this.dataSource = new MatTableDataSource<any>(this.items);
    this.makeEmptyListElement();
  }

  /**
   * Creates element of text for empty list if list to empty.
   */
  protected makeEmptyListElement(): void {
    const renderer = this.rendererFactory.createRenderer(null, null);
    /** body of list **/
    const tbody = document.getElementById('table').childNodes[1];
    let tr = document.getElementById('empty-tr');

    if (!tr) {
      /** row of list **/
      tr = renderer.createElement('tr');
      renderer.setAttribute(tr, 'id', 'empty-tr');

      /** cell of row **/
      const td = renderer.createElement('td');

      /** sets style and message of list empty **/
      renderer.setStyle(td, 'text-align', 'center');
      renderer.setStyle(td, 'padding', '10px');
      renderer.setAttribute(td, 'colspan', '100');
      const message = renderer.createText(this.translate('system.table.empty'));

      /** create elements **/
      renderer.appendChild(td, message);
      renderer.appendChild(tr, td);
      renderer.appendChild(tbody, tr);

      /** on change language, changes text of empty table **/
      TranslateService.observer.subscribe(value => {
        renderer.setProperty(
          td,
          'innerText',
          this.translate('system.table.empty')
        );
      });
    }
    renderer.setStyle(
      tr,
      'display',
      this.items.length === 0 ? 'contents' : 'none'
    );
  }

  /**
   * Goes to the add component.
   */
  add(): void {
    this.goToAdd();
  }

  /**
   * Goes to the edit component.
   *
   * @param {any} id
   */
  edit(id): void {
    this.goToEdit(id);
  }

  /**
   * Goes to the view component.
   *
   * @param {any} id
   */
  view(id): void {
    this.goToView(id);
  }

  /**
   * Sets the removable ID and checks if the operation has
   * a confirmation or not.
   *
   * If NOT: call the service to delete the item.
   *
   * @param {any} id
   */
  remove(id): void {
    this.removeId = id;
    const dialogRef = this.dialogService.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
    });
  }

  /**
   * Calls the service to delete the item.
   *
   * Notifies by 'toast' at the end: Success or Error.
   *
   * Finally, refreshes the list of items.
   */
  delete(): void {
    this.service.remove(this.getServiceURL(), this.removeId).subscribe(
      result => {
        this.postDelete();
        this.notification.deleteSuccess();
      },
      error => {
        this.notification.error(
          error.error ? error.error.message : error.message
        );
      },
      () => {
        /* Finally */
        this.listItems();
      }
    );
  }

  /**
   * Goes to the add component.
   *
   * @param {any} id
   */
  goToAdd(): void {
    this.navigate([this.getRouterURL(), 'create']);
  }

  /**
   * Goes to the edit component.
   *
   * @param {any} id
   */
  goToEdit(id = null): void {
    this.navigate([this.getRouterURL(), 'edit', id ? id : '']);
  }

  /**
   * Goes to the view component.
   *
   * @param {any} id
   */
  goToView(id): void {
    this.navigate([this.getRouterURL(), 'view', id]);
  }

  /**
   * Executes post successful delete.
   */
  protected postDelete(): void {}

  /**
   * When the page of pagination changes, executes
   * this method.
   *
   * @param { previousPageIndex: number, pageIndex: number, pageSize: number } paginator
   */
  onChangePaginator(paginator: {
    previousPageIndex: number;
    pageIndex: number;
    pageSize: number;
  }) {
    this.currentPageSize = paginator.pageSize;
    this.currentPage = paginator.pageIndex + 1;
    this.listItems();
  }

  /**
   * When key search field, executes
   * this method.
   */
  onSearch(event): void {
    this.currentFilter = event.filter;
    this.currentSearch = event.search;
    this.listItems();
  }

  /**
   * When the ordering changes, executes
   * this method.
   *
   * @param {active: String, direction: String} ordering
   */
  onChangeSort(ordering: { active: String; direction: String }): void {
    this.currentColumn = ordering.active;
    this.currentSort = ordering.direction;
    this.listItems();
  }

  /**
   * Set the size of the page.
   *
   * @param {size: number}
   */
  public setPageSize(size: Number) {
    this.currentPageSize = size;
    this.listItems();
  }

  /**
   * The set of provided page size options to display to the user.
   *
   * @returns {number[]}
   */
  protected setPageSizeOptions(): number[] {
    return [10, 20, 50];
  }

  /**
   * Gets the parameters for pagination.
   *
   * @returns {Object}
   */
  protected getPaginationParams() {
    return {
      currentPage: this.currentPage,
      pageSize: this.currentPageSize,
      column: this.currentColumn,
      sort: this.currentSort,
      search: this.currentSearch
        ? this.currentSearch.trim()
        : this.currentSearch
    };
  }

  /**
   * Check if the list is empty
   *
   * @returns {boolean}
   */
  get listIsEmpty(): boolean {
    return this.items.length > 0;
  }
}
