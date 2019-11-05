import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertareaPage } from './vertarea.page';

describe('VertareaPage', () => {
  let component: VertareaPage;
  let fixture: ComponentFixture<VertareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
