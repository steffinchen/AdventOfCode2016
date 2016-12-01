/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Day1Component } from './day-1.component';

describe('Day1Component', () => {
  let component: Day1Component;
  let fixture: ComponentFixture<Day1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
