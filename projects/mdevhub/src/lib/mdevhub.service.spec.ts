import { TestBed } from '@angular/core/testing';

import { MdevhubService } from './mdevhub.service';

describe('MdevhubService', () => {
  let service: MdevhubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdevhubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
