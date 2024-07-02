import { TestBed } from '@angular/core/testing';

import { VotiServiceService } from './voti-service.service';

describe('VotiServiceService', () => {
  let service: VotiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
