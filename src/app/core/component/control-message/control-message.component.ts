import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html'
})
export class ControlMessagesComponent {
  static MESSAGES = {
    required: 'system.form.validation.required',
    email: 'system.form.validation.email',
    max: 'system.form.validation.max-value',
    min: 'system.form.validation.min-value',
    maxlength: 'system.form.validation.max-size',
    minlength: 'system.form.validation.min-size',
    invalidPassword: 'system.form.validation.password.invalid',
    passwordNotSame: 'system.form.validation.password.not-same'
  };

  static translate;

  @Input() control: FormControl;

  constructor(private translate: TranslateService) {
    ControlMessagesComponent.translate = translate;
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ControlMessagesComponent.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    return {
      message: ControlMessagesComponent.MESSAGES[validatorName],
      value: ControlMessagesComponent.extractValidatorValue(
        validatorName,
        validatorValue
      )
    };
  }

  static extractValidatorValue(validatorName: string, validatorValue?: any) {
    switch (validatorName) {
      case 'max':
        return validatorValue.max;

      case 'min':
        return validatorValue.min;

      case 'maxlength':
      case 'minlength':
        return validatorValue.requiredLength;
      case 'invalidPassword':
        return 'invalidPassword';
      case 'passwordNotSame':
        return 'passwordNotSame';
    }
    return validatorValue;
  }
}
