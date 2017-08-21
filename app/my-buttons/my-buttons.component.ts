import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { MyCodeService } from '../my-code.service';

@Component({
  selector: 'app-my-buttons',
  templateUrl: './my-buttons.component.html',
  styleUrls: ['./my-buttons.component.scss']
})
export class MyButtonsComponent implements OnInit {
  viewCodeShow: boolean = false;
  showContent: boolean = false;
  tooltip: string = 'View Source';
  cardTitleClass: boolean = false;  

  constructor() { 
  }

  viewCode() {
    this.viewCodeShow = !this.viewCodeShow;
    this.tooltip = this.viewCodeShow ? 'Browser Output' : 'View Source';
  }
  
  showCardContent() {
    this.showContent = !this.showContent;
  }
  
  onMouseOver() {
    this.cardTitleClass = true;
    console.log('onMouseOver() - ' + this.cardTitleClass);  
  }

  onMouseOut() {
    this.cardTitleClass = false;
    console.log('onMouseOut() - ' + this.cardTitleClass);  
  }

  ngOnInit() {
  }

}
