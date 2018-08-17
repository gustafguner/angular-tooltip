import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[angular-tooltip]'
})
export class AngularTooltipDirective {

  constructor() { }

  @HostListener('mouseenter') onmouseenter() {
    alert();
  }

  OnInit() {

  }

}
