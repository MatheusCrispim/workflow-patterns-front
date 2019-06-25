import { OnInit } from '@angular/core';

import { BaseComponent } from './base.component';
import { BaseModelComponent } from './base-model.component';

/**
 * The 'BaseItemComponent' class provides the common API for all the components
 * that works with items.
 *
 * All components that uses models MUST extend this class.
 *
 * @extends BaseComponent
 */
export abstract class BaseItemComponent extends BaseModelComponent
  implements OnInit {
  /**
   * Item which is being edited or view.
   *
   * @type {any}
   */
  public item: any = new Object();

  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * On Init of the component.
   */
  ngOnInit(): void {
    super.ngOnInit();

    this.getItem();
  }

  /**
   * Gets the item for edition if is an edit mode.
   *
   * If insert mode, by pass this.
   */
  protected getItem(): void {
    const id = this.getParamId();
    if (id) {
      this.service.getOne(this.getServiceURL(), id).subscribe(result => {
        this.item = result;
        this.postGetItem();
      });
    }
  }

  /**
   * Navigates back to the list component.
   */
  public backToList(): void {
    this.navigate([this.getRouterURL()]);
  }

  /**
   * Executes post the execution of Get Item.
   */
  protected postGetItem(): void {}

  /**
   * Gets the ID in the parameters list.
   *
   * @returns {string}
   */
  protected getParamId(): string {
    return this.getParam(this.getItemIdKey());
  }

  /**
   * Gets the Key of Item ID.
   *
   * @returns {string}
   */
  protected getItemIdKey(): string {
    return 'id';
  }
}
