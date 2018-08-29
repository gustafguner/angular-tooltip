import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';

import { AngularTooltipModule } from '@gustafguner/angular-tooltip';

@NgModule({
  declarations: [
    AppComponent,
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
