import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Tags } from '../../common/tags.enum';


@Component({
  selector: 'app-common-main-tab',
  templateUrl: './common-main-tab.component.html',
  styleUrls: ['./common-main-tab.component.css'],
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
export class CommonMainTabComponent implements OnInit {
  @Input() title: string = 'Card';
  @Input() toolbarTitle: string = 'Toolbar';
  @Input() tabs: Array<any> = ['TAB1', 'TAB2', 'TAB3'];
  @Input() codeUrls: Array<string>;
  @Input() tag: Tags = 0;
  viewCodeShow: boolean = false;
  showContent: boolean = false;
  tooltip: string = 'View Source';
  cardState:string = 'in';

  constructor() { }

  ngOnInit() {
  }

}
