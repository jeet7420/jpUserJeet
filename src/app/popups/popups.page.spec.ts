import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsPage } from './popups.page';

describe('PopupsPage', () => {
  let component: PopupsPage;
  let fixture: ComponentFixture<PopupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
