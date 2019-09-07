import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfificationPhonePage } from './verfification-phone.page';

describe('VerfificationPhonePage', () => {
  let component: VerfificationPhonePage;
  let fixture: ComponentFixture<VerfificationPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfificationPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfificationPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
