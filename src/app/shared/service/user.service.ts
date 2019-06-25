import { Injectable } from '@angular/core';

import { LoginURL, UserURL } from '../url/url.domain';
import { AuthService } from '../../core/service/auth.service';

@Injectable()
export class UserService extends AuthService {
  constructor() {
    super();
  }

  login(login, password) {
    return this.post(LoginURL.BASE, { login, password });
  }

  changePassword(body: any) {
    return this.patch(UserURL.CHANGE_PASSWORD, body);
  }
}
