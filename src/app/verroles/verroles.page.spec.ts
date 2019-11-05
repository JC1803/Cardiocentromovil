import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrolesPage } from './verroles.page';

describe('VerrolesPage', () => {
  let component: VerrolesPage;
  let fixture: ComponentFixture<VerrolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerrolesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerrolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
