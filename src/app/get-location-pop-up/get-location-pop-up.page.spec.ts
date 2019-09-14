import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationPopUpPage } from './get-location-pop-up.page';

describe('GetLocationPopUpPage', () => {
  let component: GetLocationPopUpPage;
  let fixture: ComponentFixture<GetLocationPopUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLocationPopUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLocationPopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
