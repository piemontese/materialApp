import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.cursor = 'hand';
  }

}
