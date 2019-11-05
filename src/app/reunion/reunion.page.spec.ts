import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionPage } from './reunion.page';

describe('ReunionPage', () => {
  let component: ReunionPage;
  let fixture: ComponentFixture<ReunionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
