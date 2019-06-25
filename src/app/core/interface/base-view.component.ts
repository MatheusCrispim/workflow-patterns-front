import { OnInit } from '@angular/core';
import { BaseItemComponent } from './base-item.component';

/**
 * The 'BaseViewComponent' provides the common API for model view component.
 *
 * All model view components MUST extend this class.
 *
 * @extends BaseItemComponent
 *
 * @property {any}          item      - item which is being edited.
 */
export abstract class BaseViewComponent extends BaseItemComponent
  implements OnInit {
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
  }
}
