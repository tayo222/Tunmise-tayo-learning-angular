import { TestBed } from '@angular/core/testing';

import { HospitalStaffService } from './hospital-staff.service';

describe('HospitalStaffService', () => {
  let service: HospitalStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
