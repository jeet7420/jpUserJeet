import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupIngredientsPage } from './popup-ingredients.page';

describe('PopupIngredientsPage', () => {
  let component: PopupIngredientsPage;
  let fixture: ComponentFixture<PopupIngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupIngredientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupIngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
