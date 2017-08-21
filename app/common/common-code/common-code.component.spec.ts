/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonCodeComponent } from './common-code.component';

describe('CommonCodeComponent', () => {
  let component: CommonCodeComponent;
  let fixture: ComponentFixture<CommonCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
