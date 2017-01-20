import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';

/*
export interface MyTabs {
    html: string;
    ts: string;
    scss: string;
}
export interface MyComponent {
    cardTitle: string;
    toolbarTitle: string;
    tabs: Array<MyTabs>;
    codeUrls: Array<MyTabs>;
    tag: string;
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() expandUpdated = new EventEmitter();
  title: string = 'Angular Material 2';
  listFilter: string = '';
  searchMatch: boolean = true;
  components: Array<any> = [];
  expand: boolean = false;
  listView: boolean = true;

  /*
  components = [ 
    { cardTitle: 'Button', toolbarTitle: 'md-button', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-buttons/my-buttons.component.html', ts: 'app/my-buttons/my-buttons.component.ts', scss: 'app/my-buttons/my-buttons.component.scss'}, tag: '<app-my-buttons></app-my-buttons>' },
    { cardTitle: 'Card', toolbarTitle: 'md-card', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-cards/my-cards.component.html', ts: 'app/my-cards/my-cards.component.ts', scss: 'app/my-cards/my-cards.component.scss'}, tag: '<app-my-cards></app-my-cards>' },
    { cardTitle: 'Checkbox', toolbarTitle: 'md-checkbox', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-checkboxes/my-checkboxes.component.html', ts: 'app/my-checkboxes/my-checkboxes.component.ts', scss: 'app/my-checkboxes/my-checkboxes.component.scss'}, tag: '<app-my-checkboxes></app-my-checkboxes>' },
    { cardTitle: 'Input', toolbarTitle: 'md-input', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-inputs/my-inputs.component.html', ts: 'app/my-inputs/my-inputs.component.ts', scss: 'app/my-inputs/my-inputs.component.scss'}, tag: '<app-my-inputs></app-my-inputs>' },
    { cardTitle: 'Menu', toolbarTitle: 'md-menu', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-menus/my-menus.component.html', ts: 'app/my-menus/my-menus.component.ts', scss: 'app/my-menus/my-menus.component.scss'}, tag: '<app-my-menus></app-my-menus>' },
    { cardTitle: 'Slide toggle', toolbarTitle: 'md-slide-toggle', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-slide-toggles/my-slide-toggles.component.html', ts: 'app/my-slide-toggles/my-slide-toggles.component.ts', scss: 'app/my-slide-toggles/my-slide-toggles.component.scss'}, tag: '<app-my-menus></app-my-menus>' },
    { cardTitle: 'Toolbar', toolbarTitle: 'md-toolbar', tabs: {html: 'HTML', ts: 'TS', scss: 'SCSS'}, 
      codeUrls: {html: 'app/my-toolbars/my-toolbars.component.html', ts: 'app/my-toolbars/my-toolbars.component.ts', scss: 'app/my-toolbars/my-toolbars.component.scss'}, tag: '<app-my-toolbars></app-my-toolbars>' }
  ];
  */
  viewSearch: boolean = false;
  
  constructor() {
    this.expandUpdated.emit(this.expand);

    let tabs = [ 'HTML', 'TS', 'SCSS'];
    
    let codeUrls = [ 'app/my-buttons/my-buttons.component.html', 'app/my-buttons/my-buttons.component.ts', 'app/my-buttons/my-buttons.component.scss' ];
    this.components.push({ cardTitle: 'Button', toolbarTitle: 'md-button', tabs: tabs, codeUrls: codeUrls});

    codeUrls = [ 'app/my-cards/my-cards.component.html', 'app/my-cards/my-cards.component.ts', 'app/my-cards/my-cards.component.scss' ];
    this.components.push({ cardTitle: 'Card', toolbarTitle: 'md-card', tabs: tabs, codeUrls: codeUrls});

    codeUrls = [ 'app/my-checkboxes/my-checkboxes.component.html', 'app/my-checkboxes/my-checkboxes.component.ts', 'app/my-checkboxes/my-checkboxes.component.scss' ];
    this.components.push({ cardTitle: 'Checkbox', toolbarTitle: 'md-checkbox', tabs: tabs, codeUrls: codeUrls});

    codeUrls = [ 'app/my-inputs/my-inputs.component.html', 'app/my-inputs/my-inputs.component.ts', 'app/my-inputs/my-inputs.component.scss' ];
    this.components.push({ cardTitle: 'Input', toolbarTitle: 'md-input', tabs: tabs, codeUrls: codeUrls});

    codeUrls = [ 'app/my-menus/my-menus.component.html', 'app/my-menus/my-menus.component.ts', 'app/my-menus/my-menus.component.scss' ];
    this.components.push({ cardTitle: 'Menu', toolbarTitle: 'md-menu', tabs: tabs, codeUrls: codeUrls});

    codeUrls = [ 'app/my-slide-toggles/my-slide-toggles.component.html', 'app/my-slide-toggles/my-slide-toggles.component.ts', 'app/my-slide-toggles/my-slide-toggles.component.scss' ];
    this.components.push({ cardTitle: 'Slide toggle', toolbarTitle: 'md-slide-toggle', tabs: tabs, codeUrls: codeUrls});
    
    codeUrls = [ 'app/my-toolbars/my-toolbars.component.html', 'app/my-toolbars/my-toolbars.component.ts', 'app/my-toolbars/my-toolbars.component.scss' ];
    this.components.push({ cardTitle: 'Toolbar', toolbarTitle: 'md-toolbar', tabs: tabs, codeUrls: codeUrls});
  }

  onSearchChange( value: string ) {
//    console.log('Button'.search(this.listFilter));
    this.searchMatch = ( !'Button'.search(this.listFilter) || this.listFilter==='' ) ? true : false;
  }
      
  showCard( value: string ) {
 //     console.log(value.indexOf(this.listFilter));
      return ( value.indexOf(this.listFilter) >= 0 || this.listFilter==='' ) ? true : false;
    }
          
  ngOnInit() {
    console.log(this.title);
    console.log(this.components);
  }

}



