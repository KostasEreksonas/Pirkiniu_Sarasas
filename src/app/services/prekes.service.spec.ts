import { TestBed } from '@angular/core/testing';

import { PrekesService } from './prekes.service';

describe('PrekesService', () => {
  let service: PrekesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrekesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
