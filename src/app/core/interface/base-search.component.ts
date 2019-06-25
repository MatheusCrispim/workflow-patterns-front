import {
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

/**
 * The 'BaseViewComponent' provides the common API to search models.
 */
export abstract class BaseSearchComponent implements OnInit {
  /**
   * Debounce time default 1 second
   */
  @Input() debounceTime: number = 1000;

  /**
   * Emits the event of key pressed to start a search.
   *
   * @type {}
   */
  @Output() keySearch = new EventEmitter<any>();

  /**
   * Current value of the search text.
   */
  public currentSearch: string;

  /**
   * Element ref current search
   */
  @ViewChild('searchRef') searchRef: ElementRef;

  /**
   * On Init of the component.
   */
  ngOnInit() {
    this.setupDebounce();
  }

  /**
   * Executes after the search text change.
   */
  onKeySearch(): void {
    this.keySearch.emit({ filter: [], search: this.currentSearch });
  }

  /**
   * Initial debounce setting
   *
   */
  setupDebounce(): void {
    Observable.fromEvent(this.searchRef.nativeElement, 'keyup')
      .map((evt: any) => evt.target.value)
      .debounceTime(this.debounceTime)
      .distinctUntilChanged()
      .subscribe((text: string) => this.onKeySearch());
  }
}
