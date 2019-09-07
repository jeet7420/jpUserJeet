import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPage } from './opt.page';

describe('OptPage', () => {
  let component: OptPage;
  let fixture: ComponentFixture<OptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
