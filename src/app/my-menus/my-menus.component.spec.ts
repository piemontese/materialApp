/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMenusComponent } from './my-menus.component';

describe('MyMenusComponent', () => {
  let component: MyMenusComponent;
  let fixture: ComponentFixture<MyMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
