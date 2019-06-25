import { FormControl, AbstractControl } from '@angular/forms';

export class CustomValidators {
  static passwordValidator(control: AbstractControl) {
    const regex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)'
    );
    return !regex.test(control.value) ? { invalidPassword: true } : null;
  }
}
