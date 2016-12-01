/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Day252015Component } from './day25-2015.component';

describe('Day252015Component', () => {
  let component: Day252015Component;
  let fixture: ComponentFixture<Day252015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day252015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day252015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
