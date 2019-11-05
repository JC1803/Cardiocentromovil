import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtareatPage } from './addtareat.page';

describe('AddtareatPage', () => {
  let component: AddtareatPage;
  let fixture: ComponentFixture<AddtareatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtareatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtareatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
