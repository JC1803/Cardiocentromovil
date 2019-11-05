import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramaPage } from './organigrama.page';

describe('OrganigramaPage', () => {
  let component: OrganigramaPage;
  let fixture: ComponentFixture<OrganigramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
