import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

enum Tags {
    button=1, card, checkbox, input, menu, slideToggle, toolbar
};

@Component({
  selector: 'app-common-main-tab',
  templateUrl: './common-main-tab.component.html',
  styleUrls: ['./common-main-tab.component.css']
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
