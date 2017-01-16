/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MySlideTogglesComponent } from './my-slide-toggles.component';

describe('MySlideTogglesComponent', () => {
  let component: MySlideTogglesComponent;
  let fixture: ComponentFixture<MySlideTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySlideTogglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySlideTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
