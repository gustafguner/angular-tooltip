import { NgModule } from '@angular/core';
import { AngularTooltipComponent } from './angular-tooltip.component';
import { AngularTooltipDirective } from './angular-tooltip.directive';

@NgModule({
  imports: [
  ],
  declarations: [AngularTooltipComponent, AngularTooltipDirective, AngularTooltipDirective],
  exports: [AngularTooltipComponent, AngularTooltipDirective]
})
export class AngularTooltipModule { }
