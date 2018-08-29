import { Component, OnInit, ContentChild, ViewChild, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Component({
  selector: 'tooltip-test',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./tooltip-test.component.scss']
})
export class TooltipTestComponent implements OnInit {
  @Input('tooltip-text') tooltipText: string;
  @Input('tooltip-direction') tooltipDirection: string;
  @Input('tooltip-effect') tooltipEffect: string;

  private element: ElementRef;
  private trigger: ElementRef;
  private tooltip: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.element = this.el.nativeElement.childNodes[0];

    this.trigger = this.renderer.createElement('at-trigger');
    this.tooltip = this.renderer.createElement('at-tooltip');

    let tooltipContent;

    if (this.tooltipText !== undefined) {
      tooltipContent = this.renderer.createText(this.tooltipText);
    } else {
      tooltipContent = this.renderer.createText('Tooltip');
    }

    this.renderer.appendChild(this.tooltip, tooltipContent);

    // Tooltip direction class
    if (/^(top|right|bottom|left)$/.test(this.tooltipDirection)) {
      this.renderer.addClass(this.tooltip, this.tooltipDirection);
    } else {
      this.renderer.addClass(this.tooltip, 'bottom');
    }

    // Tooltip effect class
    if (/^(zoom|fade|slide)$/.test(this.tooltipEffect)) {
      this.renderer.addClass(this.tooltip, this.tooltipEffect);
    } else {
      this.renderer.addClass(this.tooltip, 'zoom');
    }

    this.renderer.appendChild(this.el.nativeElement, this.trigger);
    this.renderer.appendChild(this.trigger, this.element);
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.removeClass(this.el.nativeElement, 'at-deactivate');
    this.renderer.addClass(this.el.nativeElement, 'at-active');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'at-active');
    this.renderer.addClass(this.el.nativeElement, 'at-deactivate');
  }

}
