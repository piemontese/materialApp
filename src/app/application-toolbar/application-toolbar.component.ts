import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-toolbar',
  templateUrl: './application-toolbar.component.html',
  styleUrls: ['./application-toolbar.component.scss']
})
export class ApplicationToolbarComponent implements OnInit {
    title: string = 'Angular Material 2';
    listFilter: string = '';
    searchMatch: boolean = true;
    components: Array<any> = [];
    expand: boolean = false;
    listView: boolean = true;
    viewSearch: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
