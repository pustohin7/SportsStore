import { TestBed } from '@angular/core/testing';

import { StoreFirtsGuard } from './store-firts.guard';

describe('StoreFirtsGuard', () => {
  let guard: StoreFirtsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StoreFirtsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
