import { TestBed } from '@angular/core/testing';

import { GetTokenInfoService } from './get-token-info.service';

describe('GetTokenInfoService', () => {
  let service: GetTokenInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTokenInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
