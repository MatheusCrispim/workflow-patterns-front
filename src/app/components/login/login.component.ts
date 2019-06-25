import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/Rx';

import { BaseComponent } from '../../core/interface/base.component';
import { UserService } from '../../shared/service/user.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { STORAGE_KEY } from '../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private permissionService: NgxPermissionsService
  ) {
    super();
  }

  ngOnInit() {
    if (this.userService.isLogged()) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      login: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  onSubmit(): void {
    this.loading = !this.loading;
    this.login(this.loginForm.value['login'], this.loginForm.value['password']);
  }

  login(login, password) {
    this.userService.login(login, password).subscribe(
      result => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        this.permissionService.loadPermissions(
          this.userService.getUser().permissions
        );
        this.loading = !this.loading;
        this.router.navigate(['/']);
      },
      error => {
        this.loading = !this.loading;
        this.notification.error(this.translate('login.error'));
      }
    );
  }
}
