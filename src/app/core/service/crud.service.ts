import { Injectable } from '@angular/core';

import { SearchService } from './search.service';

/**
 * The 'CrudService' class provides the common API and operations
 * to insert, update and remove an item.
 *
 * @extends SearchService
 */
@Injectable()
export class CrudService extends SearchService {
  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * Inserts an item.
   *
   * @param {string} url
   * @param {Object} item
   * @returns {Observable<Object>}
   */
  insert(url, item) {
    return this.post(url, item);
  }

  /**
   * Updates the item.
   *
   * @param {string} url
   * @param {any} id
   * @param {Object} item
   * @returns {Observable<Object>}
   */
  update(url, id, item) {
    return this.put(url + '/' + id, item);
  }

  /**
   * Updates the item partially.
   *
   * @param {string} url
   * @param {any} id
   * @param {Object} item
   * @returns {Observable<Object>}
   */
  updatePartial(url, id, item) {
    return this.patch(url + '/' + id, item);
  }

  /**
   * Removes the item.
   *
   * @param {string} url
   * @param {any} id
   * @returns {Observable<Object>}
   */
  remove(url, id) {
    return this.delete(url + '/' + id);
  }
}
