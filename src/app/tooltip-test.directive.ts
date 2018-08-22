import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[tooltip-test]'
})
export class TooltipTestDirective {
  @Input('tooltip-text') tooltipText: string;
  @Input('tooltip-direction') tooltipDirection: string;

  tooltip: ElementRef;
  atWrapper: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.atWrapper = this.renderer.createElement('at-wrapper');
    let atTrigger = this.renderer.createElement('at-trigger');

    const parentNode = this.el.nativeElement.parentNode;
    
    //this.renderer.appendChild(atTrigger, this.el.nativeElement);
    //this.renderer.addClass(this.el.nativeElement, 'at-trigger');
    this.renderer.appendChild(this.atWrapper, atTrigger);

    // Tooltip
    this.tooltip = this.renderer.createElement('at-tooltip');
    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltip, tooltipContent);
    if (/^(top|right|bottom|left)$/.test(this.tooltipDirection)) {
      this.renderer.addClass(this.tooltip, this.tooltipDirection);
    } else {
      this.renderer.addClass(this.tooltip, 'bottom');
    }
    // ***
    this.renderer.appendChild(this.atWrapper, this.tooltip);

    console.log(parentNode);
    console.log(this.atWrapper);
    console.log(this.el.nativeElement);

    this.renderer.insertBefore(parentNode, this.atWrapper, this.el.nativeElement);
    this.renderer.appendChild(atTrigger, this.el.nativeElement);

  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.atWrapper, 'at-active');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.atWrapper, 'at-active');
  }
}
