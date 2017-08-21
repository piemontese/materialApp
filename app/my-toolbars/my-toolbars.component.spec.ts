/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyToolbarsComponent } from './my-toolbars.component';

describe('MyToolbarsComponent', () => {
  let component: MyToolbarsComponent;
  let fixture: ComponentFixture<MyToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToolbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
