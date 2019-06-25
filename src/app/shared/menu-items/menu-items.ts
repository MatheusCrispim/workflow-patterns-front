import { Injectable } from '@angular/core';

export interface Menu {
  value?: string;
  label: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { type: 'link', icon: '', value: 'users', label: 'Users' },
  { type: 'link', icon: '', value: 'tasks', label: 'Tasks' },
  { type: 'link', icon: '', value: 'permissions', label: 'Permissions' },
  { type: 'link', icon: '', value: 'roles', label: 'Roles' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
