import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtareaPage } from './addtarea.page';

describe('AddtareaPage', () => {
  let component: AddtareaPage;
  let fixture: ComponentFixture<AddtareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
