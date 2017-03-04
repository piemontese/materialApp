import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';

import { CommonToolbarComponent } from './common/common-toolbar/common-toolbar.component';
import { CommonCardComponent } from './common/common-card/common-card.component';
import { CommonTabsComponent } from './common/common-tabs/common-tabs.component';
import { CommonCodeComponent } from './common/common-code/common-code.component';
import { CommonMainToolbarComponent } from './common/common-main-toolbar/common-main-toolbar.component';
import { CommonMainTabComponent } from './common/common-main-tab/common-main-tab.component';

import { MyButtonsComponent } from './my-buttons/my-buttons.component';
import { MyCodeService } from './my-code.service';
import { MyCheckboxesComponent } from './my-checkboxes/my-checkboxes.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { MyInputsComponent } from './my-inputs/my-inputs.component';
import { MyMenusComponent } from './my-menus/my-menus.component';
import { CardHoverDirective } from './common/card-hover.directive';
import { ComponentFilterPipe } from './common/component-filter.pipe';
import { MySlideTogglesComponent } from './my-slide-toggles/my-slide-toggles.component';
import { MyToolbarsComponent } from './my-toolbars/my-toolbars.component';
import { MyRadioButtonsComponent } from './my-radio-buttons/my-radio-buttons.component';
import { MyProgressSpinnersComponent } from './my-progress-spinners/my-progress-spinners.component';
import { MyProgressBarsComponent } from './my-progress-bars/my-progress-bars.component';
import { MyDialogComponent, DialogOverviewExampleDialog } from './my-dialog/my-dialog.component';
import { MyAutocompleteComponent } from './my-autocomplete/my-autocomplete.component';
import { MySidenavComponent } from './my-sidenav/my-sidenav.component';
import { ApplicationToolbarComponent } from './application-toolbar/application-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonToolbarComponent,
    CommonCardComponent,
    CommonTabsComponent,
    MyButtonsComponent,
    MyCheckboxesComponent,
    MyCardsComponent,
    MyInputsComponent,
    MyMenusComponent,
    CardHoverDirective,
    ComponentFilterPipe,
    MySlideTogglesComponent,
    MyToolbarsComponent,
    CommonCodeComponent,
    CommonMainToolbarComponent,
    CommonMainTabComponent,
    MyRadioButtonsComponent,
    MyProgressSpinnersComponent,
    MyProgressBarsComponent,
    MyDialogComponent,
    DialogOverviewExampleDialog,
    MyAutocompleteComponent,
    MySidenavComponent,
    ApplicationToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    ClipboardModule
  ],
  providers: [
    MyCodeService
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
