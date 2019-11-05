import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificadorPage } from './planificador.page';

describe('PlanificadorPage', () => {
  let component: PlanificadorPage;
  let fixture: ComponentFixture<PlanificadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
