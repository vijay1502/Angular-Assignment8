import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com1Component } from './com1.component';

describe('Com1Component', () => {
  let component: Com1Component;
  let fixture: ComponentFixture<Com1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
