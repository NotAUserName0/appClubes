import { TestBed } from '@angular/core/testing';

import { CoordGuardGuard } from './coord-guard.guard';

describe('CoordGuardGuard', () => {
  let guard: CoordGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoordGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
