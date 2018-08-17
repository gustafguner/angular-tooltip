import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularTooltipModule } from 'angular-tooltip';
import { TooltipTestDirective } from './tooltip-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipTestDirective
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
