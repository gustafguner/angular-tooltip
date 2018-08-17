import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip-test]'
})
export class TooltipTestDirective {
  @Input('tooltip-text') tooltipText: string;
  tooltip: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'at-container');
    console.log(this.tooltipText);
    this.tooltip = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltip, 'at-tooltip');
    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltip, tooltipContent);
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.el.nativeElement, 'at-active');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'at-active');
  }

}
