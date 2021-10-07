import { TestBed } from '@angular/core/testing';

import { OrderRegistrationService } from './order-registration.service';

describe('OrderRegistrationService', () => {
  let service: OrderRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
