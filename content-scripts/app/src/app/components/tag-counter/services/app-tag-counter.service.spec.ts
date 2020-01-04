import { TestBed } from '@angular/core/testing';

import { AppTagCounterService } from './app-tag-counter.service';

describe('AppCounterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTagCounterService = TestBed.get(AppTagCounterService);
    expect(service).toBeTruthy();
  });

  it('Tags Count should be length of tags array', () => {
    const service: AppTagCounterService = TestBed.get(AppTagCounterService);
    service.setTags(['test1', 'test2', 'test3', 'test10', 'test11']);
    expect(service.getTagsCount()).toBe(5);
  });

  it('Tags in title length should be 3', () => {
    const service: AppTagCounterService = TestBed.get(AppTagCounterService);
    service.setTags(['test1', 'test2', 'test10']);
    service.setTitle('test1 test2 test10');
    expect(service.getTitleTagsCount()).toBe(3);
  });

  it('Tags in description length should 3', () => {
    const service: AppTagCounterService = TestBed.get(AppTagCounterService);
    service.setTags(['test1', 'test2', 'test10']);
    service.setDescription('test1 test2 test10');
    expect(service.getDescriptionTagsCount()).toBe(3);
  });

  it('Tags total should be 4', () => {
    const service: AppTagCounterService = TestBed.get(AppTagCounterService);
    service.setTags(['test1', 'test2', 'test10', 'test11']);
    service.setTitle('test1 test2 test10');
    service.setDescription('test1 test2 test10 test11');
    expect(service.getTotalTagsUsedCount()).toBe(4);
  });
});
