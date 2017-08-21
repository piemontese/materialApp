import { Directive, HostListener } from '@angular/core';
//const screenfull = require( 'screenfull' );
import * as screenfull from 'screenfull';

@Directive({
  selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective {

  constructor() { }

  @HostListener('click') onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}