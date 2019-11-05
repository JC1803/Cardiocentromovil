import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerperfilPage } from './verperfil.page';

describe('VerperfilPage', () => {
  let component: VerperfilPage;
  let fixture: ComponentFixture<VerperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerperfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
