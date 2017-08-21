import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Tags } from './common/tags.enum';
import { AppDataService } from './app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppDataService]
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
  activeRoute: string = '';
  
constructor( private appDataService: AppDataService, private router: Router ) {
    appDataService.listFilter$.subscribe(
      listFilter => this.listFilter
      );

    this.expandUpdated.emit(this.expand);

    let tabs = [ 'HTML', 'TS', 'SCSS'];
    let baseUrl = 'app/';

    let codeUrls = [ baseUrl + 'my-buttons/my-buttons.component.html', baseUrl + 'my-buttons/my-buttons.component.ts', baseUrl + 'my-buttons/my-buttons.component.scss', baseUrl + 'my-buttons/README.md' ];
    this.components[Tags.button] = { cardTitle: 'Button', toolbarTitle: 'Simple button', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ baseUrl + 'my-cards/my-cards.component.html', baseUrl + 'my-cards/my-cards.component.ts', baseUrl + 'my-cards/my-cards.component.scss' ];
    this.components[Tags.card] = { cardTitle: 'Card', toolbarTitle: 'Simple card', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ baseUrl + 'my-checkboxes/my-checkboxes.component.html', baseUrl + 'my-checkboxes/my-checkboxes.component.ts', baseUrl + 'my-checkboxes/my-checkboxes.component.scss' ];
    this.components[Tags.checkbox] = { cardTitle: 'Checkbox', toolbarTitle: 'Simple checkbox', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ baseUrl + 'my-inputs/my-inputs.component.html', baseUrl + 'my-inputs/my-inputs.component.ts', baseUrl + 'my-inputs/my-inputs.component.scss' ];
    this.components[Tags.input] = { cardTitle: 'Input', toolbarTitle: 'Simple input', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ baseUrl + 'my-menus/my-menus.component.html', baseUrl + 'my-menus/my-menus.component.ts', baseUrl + 'my-menus/my-menus.component.scss' ];
    this.components[Tags.menu] = { cardTitle: 'Menu', toolbarTitle: 'Simple menu', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-progress-bars/my-progress-bars.component.html', baseUrl + 'my-progress-bars/my-progress-bars.component.ts', baseUrl + 'my-progress-bars/my-progress-bars.component.scss' ];
    this.components[Tags.progressBar] = { cardTitle: 'Progress bar', toolbarTitle: 'Simple progress bar', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-progress-spinners/my-progress-spinners.component.html', baseUrl + 'my-progress-spinners/my-progress-spinners.component.ts', baseUrl + 'my-progress-spinners/my-progress-spinners.component.scss' ];
    this.components[Tags.progressSpinner] = { cardTitle: 'Progress spinner', toolbarTitle: 'Simple progress spinner', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-radio-buttons/my-radio-buttons.component.html', baseUrl + 'my-radio-buttons/my-radio-buttons.component.ts', baseUrl + 'my-radio-buttons/my-radio-buttons.component.scss' ];
    this.components[Tags.radioButton] = { cardTitle: 'Radio button', toolbarTitle: 'Simple radio button', tabs: tabs, codeUrls: codeUrls};

    codeUrls = [ baseUrl + 'my-slide-toggles/my-slide-toggles.component.html', baseUrl + 'my-slide-toggles/my-slide-toggles.component.ts', baseUrl + 'my-slide-toggles/my-slide-toggles.component.scss' ];
    this.components[Tags.slideToggle] = { cardTitle: 'Slide toggle', toolbarTitle: 'Simple slide toggle', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-toolbars/my-toolbars.component.html', baseUrl + 'my-toolbars/my-toolbars.component.ts', baseUrl + 'my-toolbars/my-toolbars.component.scss' ];
    this.components[Tags.toolbar] = { cardTitle: 'Toolbar', toolbarTitle: 'Simple toolbar', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-dialog/my-dialog.component.html', baseUrl + 'my-dialog/my-dialog.component.ts', baseUrl + 'my-dialog/my-dialog.component.scss' ];
    this.components[Tags.dialog] = { cardTitle: 'Dialog', toolbarTitle: 'Simple dialog', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-autocomplete/my-autocomplete.component.html', baseUrl + 'my-autocomplete/my-autocomplete.component.ts', baseUrl + 'my-autocomplete/my-autocomplete.component.scss' ];
    this.components[Tags.autocomplete] = { cardTitle: 'Autocomplete', toolbarTitle: 'Simple autocomplete', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-sidenav/my-sidenav.component.html', baseUrl + 'my-sidenav/my-sidenav.component.ts', baseUrl + 'my-sidenav/my-sidenav.component.scss' ];
    this.components[Tags.sidenav] = { cardTitle: 'Sidenav', toolbarTitle: 'Simple sidenav', tabs: tabs, codeUrls: codeUrls};
    
    codeUrls = [ baseUrl + 'my-flex-layout/my-flex-layout.component.html', baseUrl + 'my-flex-layout/my-flex-layout.component.ts', baseUrl + 'my-flex-layout/my-flex-layout.component.scss' ];
    this.components[Tags.flexLayout] = { cardTitle: 'Flex layout', toolbarTitle: 'Flex layout samples', tabs: tabs, codeUrls: codeUrls};
    
  }

  onSearchChange( value: string ) {
    this.searchMatch = ( !'Button'.search(this.listFilter) || this.listFilter==='' ) ? true : false;
  }
      
  showCard( value: string ) {
    return ( (value.toLowerCase()).indexOf(this.listFilter.toLowerCase()) >= 0 || this.listFilter==='' ) ? true : false;
  }
          
  ngOnInit() {
    // on load go to home
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
  }

}
