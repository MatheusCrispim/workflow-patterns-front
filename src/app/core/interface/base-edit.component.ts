import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseModelComponent } from './base-model.component';
import { AppInjector } from '../../app.injector';
import { BaseItemComponent } from './base-item.component';
import { isNullOrUndefined } from 'util';

/**
 * The 'BaseEditComponent' provides the common API for edit component.
 *
 * Service, operations, forms, validations are all available.
 *
 * All edit components MUST extend this class.
 *
 * @extends BaseItemComponent
 *
 * @property {any}          item      - item which is being edited.
 */
export abstract class BaseEditComponent extends BaseItemComponent
  implements OnInit {
  /**
   * Builder for the form.
   *
   * @type {FormBuilder}
   */
  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);

  /**
   * Form for edition.
   */
  public editForm: FormGroup;

  /**
   * Defines if it is edit mode.
   */
  public isEditMode: boolean = false;

  /**
   * Defines whether the request is over
   */
  public loading: boolean = false;

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

    this.isEditMode = !isNullOrUndefined(this.getParamId());

    this.initForm();
  }

  /**
   * Initialize the edit form.
   */
  initForm(): void {
    this.editForm = this.formBuilder.group(this.getFormControls());
  }

  /**
   * Invoked when user submits the form.
   *
   * Checks if the item's id exists:
   * - No:  Inserts the item.
   * - Yes: Updates the item.
   *
   * Notifies by a 'toast' at the end: Success or Error.
   *
   * If success, go back to the list component.
   */
  onSubmit(): void {
    this.loading = !this.loading;
    if (!this.item.id) {
      this.preInsert();
      this.insert();
    } else {
      this.preUpdate();

      if (this.isUpdatePartial()) {
        this.updatePartial();
      } else {
        this.update();
      }
    }
  }

  /**
   * Gets the form value.
   *
   * @returns {any}
   */
  protected getFormValue() {
    return this.editForm.value;
  }

  /**
   * Inserts the item.
   */
  protected insert(): void {
    this.service.insert(this.getServiceURL(), this.getFormValue()).subscribe(
      result => {
        this.postInsert();
        this.notification.insertSuccess();
        this.loading = !this.loading;
        this.backToList();
      },
      error => {
        this.loading = !this.loading;
        this.notification.error(
          error.error ? error.error.message : error.message
        );
      }
    );
  }

  /**
   * Updates the item.
   */
  protected update(): void {
    this.service
      .update(this.getServiceURL(), this.item.id, this.getFormValue())
      .subscribe(
        result => {
          this.handleUpdate(result);
        },
        error => {
          this.notification.error(
            error.error ? error.error.message : error.message
          );
        }
      );
  }

  /**
   * Updates the item partially.
   */
  protected updatePartial(): void {
    this.service
      .updatePartial(this.getServiceURL(), this.item.id, this.getFormValue())
      .subscribe(
        result => {
          this.handleUpdate(result);
        },
        error => {
          this.loading = !this.loading;
          this.notification.error(
            error.error ? error.error.message : error.message
          );
        }
      );
  }

  /**
   * Handles the update result.
   *
   * @param result
   */
  protected handleUpdate(result): void {
    this.postUpdate();
    this.notification.updateSuccess();
    this.loading = !this.loading;
    this.backToList();
  }

  /**
   * Fills the form with the item retrieved.
   *
   * @override
   */
  protected postGetItem(): void {
    const formItem = {};
    Object.keys(this.getFormControls()).forEach(key => {
      formItem[key] = this.item[key] ? this.item[key] : null;
    });
    this.editForm.setValue(formItem);
  }

  /**
   * Executes before insert operation.
   */
  protected preInsert(): void {}

  /**
   * Executes post successful insert.
   */
  protected postInsert(): void {}

  /**
   * Executes before update operation.
   */
  protected preUpdate(): void {}

  /**
   * Executes post successful update.
   */
  protected postUpdate(): void {}

  /**
   * Flag to control if the update is full or partial.
   * By default: Full.
   *
   * @returns {boolean}
   */
  protected isUpdatePartial(): boolean {
    return false;
  }

  /**
   * Gets the form controls.
   *
   * @returns {Object}
   */
  abstract getFormControls(): Object;

  /**
   * Helper from select in template
   *
   * @returns {boolean}
   *
   * @param objOne
   * @param objTwo
   */
  public equalsSelect(objOne: any, objTwo: any): boolean {
    return objOne.id === objTwo.id;
  }
}
