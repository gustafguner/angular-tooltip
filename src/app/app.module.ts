import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularTooltipModule } from 'angular-tooltip';
import { TooltipTestDirective } from './tooltip-test.directive';
import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipTestDirective,
    TooltipTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
