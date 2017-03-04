import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import {Tags } from '../tags.enum';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss'],
  animations: [
    trigger('cardInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 100%, 0)'
      })),
      transition('in => out', animate('1000ms ease-in-out')),
      transition('out => in', animate('1000ms ease-in-out'))
    ]),
  ]
})
export class CommonCardComponent implements OnInit {
  @Input() title: string = 'Card';
  @Input() toolbarTitle: string = 'Toolbar';
  @Input() tabs: Array<any>;
  @Input() codeUrls: Array<string>;
  @Input() tag: Tags = -1;
  @Input() showContent: boolean = false;
  viewCodeShow: boolean = false;
  tooltip: string = 'View Source';
  cardState: string = 'in';
  tags = Tags;

  constructor() { 
      console.log(this.tags.button);
  }

  viewCode() {
    this.viewCodeShow = !this.viewCodeShow;
    this.tooltip = this.viewCodeShow ? 'Browser Output' : 'View Source';
  }
  
  showCardContent() {
    this.showContent = !this.showContent;
    this.cardState = this.cardState === 'out' ? 'in' : 'out';
    console.log(this.cardState);
  }
   
  handleExpandUpdated( expand: boolean ) {
      this.showContent = expand;
      console.log(this.showContent);
  }

  ngOnInit() {
  }

}
