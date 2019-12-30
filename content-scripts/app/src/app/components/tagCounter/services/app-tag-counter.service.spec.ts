import { TestBed } from '@angular/core/testing';

import { AppAppTagCounterServiceCounterService } from './app-tag-counter.service';

describe('AppCounterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCounterService = TestBed.get(AppTagCounterService);
    expect(service).toBeTruthy();
  });
});
