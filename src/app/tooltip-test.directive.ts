import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[tooltip-test]'
})
export class TooltipTestDirective {
  @Input('tooltip-text') tooltipText: string;
  @Input('tooltip-direction') tooltipDirection: string;

  atTooltip: ElementRef;
  atWrapper: ElementRef;
  atTrigger: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.atWrapper = this.renderer.createElement('at-wrapper');
    this.atTrigger = this.renderer.createElement('at-trigger');
    this.renderer.appendChild(this.atWrapper, this.atTrigger);

    this.atTooltip = this.renderer.createElement('at-tooltip');
    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.atTooltip, tooltipContent);
    if (/^(top|right|bottom|left)$/.test(this.tooltipDirection)) {
      this.renderer.addClass(this.atTooltip, this.tooltipDirection);
    } else {
      this.renderer.addClass(this.atTooltip, 'bottom');
    }

    this.renderer.appendChild(this.atWrapper, this.atTooltip);
    this.renderer.insertBefore(this.el.nativeElement.parentNode, this.atWrapper, this.el.nativeElement);
    this.renderer.appendChild(this.atTrigger, this.el.nativeElement);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.removeClass(this.atWrapper, 'at-deactivate');
    this.renderer.addClass(this.atWrapper, 'at-active');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.atWrapper, 'at-active');
    this.renderer.addClass(this.atWrapper, 'at-deactivate');
  }
}
