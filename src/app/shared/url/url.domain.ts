'use strict';

export const API_VERSION = 'v1';

/**
 * Default URL of the back-end server.
 *
 * @type {string}
 */
export const SERVER_URL = 'http://localhost:8080/jony/' + API_VERSION + '/';

export namespace LoginURL {
  export const BASE = 'login';
  export const REFRESH_TOKEN = 'refresh';
}

export namespace UserURL {
  export const BASE = 'users';
  export const CHANGE_PASSWORD = BASE + '/current/password';
}
export namespace TaskURL {
  export const BASE = 'tasks';
}
export namespace PermissionURL {
  export const BASE = 'permissions';
}
export namespace RoleURL {
  export const BASE = 'roles';
}
