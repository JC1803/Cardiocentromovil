import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreunionPage } from './verreunion.page';

describe('VerreunionPage', () => {
  let component: VerreunionPage;
  let fixture: ComponentFixture<VerreunionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreunionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreunionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
