import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefProfilePage } from './chef-profile.page';

describe('ChefProfilePage', () => {
  let component: ChefProfilePage;
  let fixture: ComponentFixture<ChefProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
