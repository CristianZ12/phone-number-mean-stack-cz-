import { TestBed } from '@angular/core/testing';

import { PhoneServicesService } from './phone-services.service';

describe('PhoneServicesService', () => {
  let service: PhoneServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
