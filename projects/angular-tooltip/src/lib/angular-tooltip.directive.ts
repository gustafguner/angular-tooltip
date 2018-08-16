import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[angular-tooltip]'
})
export class AngularTooltipDirective {

  constructor() { }

  @HostListener('mouseenter') onmouseenter() {
    alert();
  }

}
