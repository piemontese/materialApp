import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { Tags } from '../../common/tags.enum';

@Component({
  selector: 'app-common-main-toolbar',
  templateUrl: './common-main-toolbar.component.html',
  styleUrls: ['./common-main-toolbar.component.css']
})
export class CommonMainToolbarComponent implements OnInit {
  @Input() title: string = 'Card';
  @Input() toolbarTitle: string = 'Toolbar';
  @Input() tabs: Array<any>;
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
