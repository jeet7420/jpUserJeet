import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAddressPage } from './get-address.page';

describe('GetAddressPage', () => {
  let component: GetAddressPage;
  let fixture: ComponentFixture<GetAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
