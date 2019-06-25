import { Injectable } from '@angular/core';

import { BaseService } from '../interface/base.service';
import { HttpParams } from '@angular/common/http';

/**
 * The 'SearchService' class provides the common API and operations to
 * retrieve, find, filter and list items.
 *
 * @extends BaseService
 */
@Injectable()
export class SearchService extends BaseService {
  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * Gets all items.
   *
   * @param {string} url
   * @returns {Observable<Object>}
   */
  getAll(url) {
    return this.search(url);
  }

  /**
   * Searches the items where the filters matches.
   *
   * @param {string} url
   * @returns {Observable<Object>}
   */
  search(url, pagination = {}, filters = []): any {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify(Object.assign(pagination, { filters: filters }))
    );

    return this.get(url, params);
  }

  /**
   * Gets one item by its ID.
   *
   * @param {string} url
   * @param {any} id
   * @returns {Observable<Object>}
   */
  getOne(url, id) {
    return this.get(url + '/' + id);
  }

  getURL(url) {
    return this.get(url);
  }
}
