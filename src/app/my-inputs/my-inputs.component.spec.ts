/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyInputsComponent } from './my-inputs.component';

describe('MyInputsComponent', () => {
  let component: MyInputsComponent;
  let fixture: ComponentFixture<MyInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
