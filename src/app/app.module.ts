import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js'; //or for angular-cli the path will be ../../node_modules/angular2-highlight-js 

import { AppComponent } from './app.component';

import { CommonToolbarComponent } from './common/common-toolbar/common-toolbar.component';
import { CommonCardComponent } from './common/common-card/common-card.component';
import { CommonTabsComponent } from './common/common-tabs/common-tabs.component';

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

@NgModule({
  declarations: [
    AppComponent,
//    HighlightJsModule,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
//    HighlightJsService, 
    MyCodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
