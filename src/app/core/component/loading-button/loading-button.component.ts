import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() form: FormGroup;
  @Input() type: string = 'button';
  @Input() color: string = 'primary';
  @Input() class: string;

  constructor() {}

  ngOnInit() {}

  get isFormValid(): boolean {
    return this.form && this.form.valid;
  }

  get isLoading(): boolean {
    return this.loading;
  }
}
