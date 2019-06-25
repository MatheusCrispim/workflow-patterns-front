import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseSearchComponent } from '../../interface/base-search.component';
import { AppInjector } from '../../../app.injector';
import { PropertyType } from '../../domain/property-type.domain';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent extends BaseSearchComponent
  implements OnInit {
  @Input() public properties: any[] = [];
  @Output() searchSubmit = new EventEmitter<any>();
  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  private mapProperties: any = {};

  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);
  public searchForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group(this.getFormControls());
  }

  getFormControls(): Object {
    const formControls = {};
    this.properties.forEach(property => {
      formControls[property.name] = this.formBuilder.control(undefined, []);
      this.mapProperties[property.name] = property;
    });
    return formControls;
  }

  onSearchSubmit(): void {
    const formValue = this.searchForm.value;
    const filter: Array<{
      field: String;
      value: Object;
      comparison: String;
    }> = [];

    Object.keys(formValue).forEach(key => {
      const value = formValue[key];
      if ((value !== null && value !== '') || value === false) {
        var property = this.mapProperties[key];

        filter.push(
          this.makeFilter(key, value, property.type, property.comparison)
        );
      }
    });
    this.submitEndCloseMenu(filter);
  }

  makeFilter(
    field,
    value,
    type,
    comparison
  ): { field: String; value: Object; comparison: String } {
    return {
      field: field,
      value: type === PropertyType.String ? value.trim() : value,
      comparison: comparison
    };
  }

  onClear(): void {
    this.searchForm.reset();
    this.submitEndCloseMenu([]);
  }

  submitEndCloseMenu(filter): void {
    this.onCloseMenu();
    this.currentSearch = '';
    this.searchSubmit.emit({ filter: filter, search: this.currentSearch });
  }

  onCloseMenu(): void {
    this.menu.closeMenu();
  }

  stopPropagation(event): void {
    event.stopPropagation();
  }
}
