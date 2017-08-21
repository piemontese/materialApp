import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-checkboxes',
  templateUrl: './my-checkboxes.component.html',
  styleUrls: ['./my-checkboxes.component.scss']
})
export class MyCheckboxesComponent implements OnInit {
  viewCodeShow: boolean = false;
  showContent: boolean = false;
  tooltip: string = 'View Source';
  cardTitleClass: string = 'moseOut';

  constructor() { }

  viewCode() {
    this.viewCodeShow = !this.viewCodeShow;
    this.tooltip = this.viewCodeShow ? 'Browser Output' : 'View Source';
  }
  
  showCardContent() {
    this.showContent = !this.showContent;
  }
  
  onMouseOver() {
    this.cardTitleClass = 'mouseOver';
    console.log('onMouseOver() - ' + this.cardTitleClass);  
  }

  onMouseOut() {
    this.cardTitleClass = 'mouseOut';
    console.log('onMouseOut() - ' + this.cardTitleClass);  
  }

  ngOnInit() {
  }

}
