import { TestBed } from '@angular/core/testing';

import { PaymentHandlerService } from './payment-handler.service';

describe('PaymentHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentHandlerService = TestBed.get(PaymentHandlerService);
    expect(service).toBeTruthy();
  });
});
