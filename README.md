# angular-tooltip

An easy-to-use Angular (6+) component for displaying tooltips.

## Check it out in action
[Here](https://gustafguner.github.io/angular-tooltip/)

## Installation

Install it via NPM

```shell
npm install --save @gustafguner/angular-tooltip
```

Then import the `AngularTooltipModule` and add it to `imports` in your `AppModule`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularTooltipModule } from '@gustafguner/angular-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

### Basic usage
In order to use `angular-tooltip` you only have to wrap the component `<angular-tooltip>` around the element that you want to attach a tooltip to. The following example demonstrates how to add a tooltip to an `<a>` element.

```html
<angular-tooltip tooltip-text="I'm a tooltip" tooltip-direction="right">
  <a href="">Hover me</a>
</angular-tooltip>
```

The attribute `tooltip-text` controls the text content of the tooltip. The attribute `tooltip-direction` controls in which direction the tooltip will appear. `tooltip-direction` can be set to either `top`, `right`, `bottom` or `left`.
