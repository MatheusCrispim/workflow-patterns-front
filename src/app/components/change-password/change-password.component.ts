import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms';

import { BaseComponent } from '../../core/interface/base.component';
import { UserService } from '../../shared/service/user.service';
import { CustomValidators } from '../../shared/validator/customs.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  changePasswordForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.changePasswordForm = this.formBuilder.group(
      {
        currentPassword: this.formBuilder.control(undefined, [
          Validators.required
        ]),
        newPassword: this.formBuilder.control(undefined, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]),
        repeatPassword: this.formBuilder.control(undefined, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ])
      },
      { validator: this.checkEqualsPassword }
    );
  }

  onSubmit() {
    this.loading = !this.loading;
    if (
      this.changePasswordForm.valid &&
      this.changePasswordForm.value['newPassword'] ===
        this.changePasswordForm.value['repeatPassword']
    ) {
      this.changePassword();
    } else {
      this.notification.warning(this.translate('change-password.not-same'));
    }
  }

  changePassword() {
    this.userService
      .changePassword({
        currentPassword: this.changePasswordForm.value['currentPassword'],
        newPassword: this.changePasswordForm.value['newPassword']
      })
      .subscribe(
        result => {
          this.notification.successText(
            this.translate('change-password.success')
          );
          this.loading = !this.loading;
          this.navigate(['users']);
        },
        error => {
          this.loading = !this.loading;
          this.notification.error(error.error.message);
        }
      );
  }

  checkEqualsPassword(formGroup: FormGroup): ValidatorFn {
    let newPassword = formGroup.controls.newPassword;
    let repeatPassword = formGroup.controls.repeatPassword;
    newPassword.value !== repeatPassword.value
      ? repeatPassword.setErrors({ passwordNotSame: true })
      : null;
    return;
  }
}
