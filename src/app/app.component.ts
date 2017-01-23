import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';
import { Tags } from './common/tags.enum';

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
  viewSearch: boolean = false;
  
  constructor() {
    this.expandUpdated.emit(this.expand);

    let tabs = [ 'HTML', 'TS', 'SCSS'];

    let codeUrls = [ 'app/my-buttons/my-buttons.component.html', 'app/my-buttons/my-buttons.component.ts', 'app/my-buttons/my-buttons.component.scss' ];
    this.components[Tags.button] = { cardTitle: 'Button', toolbarTitle: 'md-button', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ 'app/my-cards/my-cards.component.html', 'app/my-cards/my-cards.component.ts', 'app/my-cards/my-cards.component.scss' ];
    this.components[Tags.card] = { cardTitle: 'Card', toolbarTitle: 'md-card', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ 'app/my-checkboxes/my-checkboxes.component.html', 'app/my-checkboxes/my-checkboxes.component.ts', 'app/my-checkboxes/my-checkboxes.component.scss' ];
    this.components[Tags.checkbox] = { cardTitle: 'Checkbox', toolbarTitle: 'md-checkbox', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ 'app/my-inputs/my-inputs.component.html', 'app/my-inputs/my-inputs.component.ts', 'app/my-inputs/my-inputs.component.scss' ];
    this.components[Tags.input] = { cardTitle: 'Input', toolbarTitle: 'md-input', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ 'app/my-menus/my-menus.component.html', 'app/my-menus/my-menus.component.ts', 'app/my-menus/my-menus.component.scss' ];
    this.components[Tags.menu] = { cardTitle: 'Menu', toolbarTitle: 'md-menu', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ 'app/my-progress-bars/my-progress-bars.component.html', 'app/my-progress-bars/my-progress-bars.component.ts', 'app/my-progress-bars/my-progress-bars.component.scss' ];
    this.components[Tags.progressBar] = { cardTitle: 'Progress bar', toolbarTitle: 'md-progress-bar', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ 'app/my-progress-spinners/my-progress-spinners.component.html', 'app/my-progress-spinners/my-progress-spinners.component.ts', 'app/my-progress-spinners/my-progress-spinners.component.scss' ];
    this.components[Tags.progressSpinner] = { cardTitle: 'Progress spinner', toolbarTitle: 'md-progress-spinner', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ 'app/my-radio-buttons/my-radio-buttons.component.html', 'app/my-radio-buttons/my-radio-buttons.component.ts', 'app/my-radio-buttons/my-radio-buttons.component.scss' ];
    this.components[Tags.radioButton] = { cardTitle: 'Radio button', toolbarTitle: 'md-radio-button', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ 'app/my-slide-toggles/my-slide-toggles.component.html', 'app/my-slide-toggles/my-slide-toggles.component.ts', 'app/my-slide-toggles/my-slide-toggles.component.scss' ];
    this.components[Tags.slideToggle] = { cardTitle: 'Slide toggle', toolbarTitle: 'md-slide-toggle', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ 'app/my-toolbars/my-toolbars.component.html', 'app/my-toolbars/my-toolbars.component.ts', 'app/my-toolbars/my-toolbars.component.scss' ];
    this.components[Tags.toolbar] = { cardTitle: 'Toolbar', toolbarTitle: 'md-toolbar', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ 'app/my-dialog/my-dialog.component.html', 'app/my-dialog/my-dialog.component.ts', 'app/my-dialog/my-dialog.component.scss' ];
    this.components[Tags.dialog] = { cardTitle: 'Dialog', toolbarTitle: 'md-dialog', tabs: tabs, codeUrls: codeUrls};
  }

  onSearchChange( value: string ) {
    this.searchMatch = ( !'Button'.search(this.listFilter) || this.listFilter==='' ) ? true : false;
  }
      
  showCard( value: string ) {
      return ( value.indexOf(this.listFilter) >= 0 || this.listFilter==='' ) ? true : false;
    }
          
  ngOnInit() {
  }

}



