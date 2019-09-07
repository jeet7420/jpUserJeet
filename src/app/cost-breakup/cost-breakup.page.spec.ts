import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostBreakupPage } from './cost-breakup.page';

describe('CostBreakupPage', () => {
  let component: CostBreakupPage;
  let fixture: ComponentFixture<CostBreakupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostBreakupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostBreakupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
