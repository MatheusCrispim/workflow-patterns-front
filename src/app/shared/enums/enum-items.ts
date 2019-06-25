import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumItemsService {
  constructor() {}

  getTaskStateTask() {
    return [
      { name: 'initial', desc: 'Initial' },
      { name: 'open', desc: 'Open' },
      { name: 'banker', desc: 'Banker' },
      { name: 'closed', desc: 'Closed' }
    ];
  }
}
