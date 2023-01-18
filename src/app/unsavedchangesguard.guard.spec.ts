import { TestBed, async, inject } from '@angular/core/testing';

import { UnsavedchangesguardGuard } from './unsavedchangesguard.guard';

describe('UnsavedchangesguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedchangesguardGuard]
    });
  });

  it('should ...', inject([UnsavedchangesguardGuard], (guard: UnsavedchangesguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
