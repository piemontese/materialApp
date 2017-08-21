import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlexLayoutComponent } from './my-flex-layout.component';

describe('MyFlexLayoutComponent', () => {
  let component: MyFlexLayoutComponent;
  let fixture: ComponentFixture<MyFlexLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFlexLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
