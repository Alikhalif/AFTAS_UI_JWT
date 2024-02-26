import { TestBed } from '@angular/core/testing';

import { CompititionService } from './compitition.service';

describe('CompititionService', () => {
  let service: CompititionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompititionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
