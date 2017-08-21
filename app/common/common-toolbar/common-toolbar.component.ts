import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-toolbar',
  templateUrl: './common-toolbar.component.html',
  styleUrls: ['./common-toolbar.component.css']
})
export class CommonToolbarComponent implements OnInit {
  @Input() title: string = 'Toolbar';
  @Input() tabs: Array<any>;
  @Input() codeUrls: Array<string>;
  @Output() viewCodeClick = new EventEmitter();

  viewCodeShow: boolean = false;
  tooltip: string = 'View Source';

  constructor() { 
    this.viewCodeClick.emit();
  }

  onViewClick() {
    console.log('viewClick');
  }
  
  viewCode() {
    console.log(this.codeUrls);
    this.viewCodeShow = !this.viewCodeShow;
    this.tooltip = this.viewCodeShow ? 'Browser Output' : 'View Source';
  }
 
  ngOnInit() {
  }

}
