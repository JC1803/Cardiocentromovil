import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpersonalPage } from './tpersonal.page';

describe('TpersonalPage', () => {
  let component: TpersonalPage;
  let fixture: ComponentFixture<TpersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpersonalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
