import { Directive, HostListener, Inject, ElementRef } from '@angular/core';

import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordionToggle]'
})
export class AccordionAnchorDirective {
  protected navlink: AccordionLinkDirective;

  static element: any;

  constructor(
    @Inject(AccordionLinkDirective) navlink: AccordionLinkDirective,
    private elementRef: ElementRef
  ) {
    this.navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (!AccordionAnchorDirective.element) {
      AccordionAnchorDirective.element = this.elementRef.nativeElement;
      this.navlink.toggle();
    } else {
      const currentElement =
        e.target.nodeName === 'A' ? e.target : e.target.parentNode;
      if (AccordionAnchorDirective.element !== currentElement) {
        AccordionAnchorDirective.element = this.elementRef.nativeElement;
        this.navlink.toggle();
      }
    }
  }
}
