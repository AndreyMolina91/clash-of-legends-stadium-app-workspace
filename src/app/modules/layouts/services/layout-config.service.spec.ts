import { TestBed } from '@angular/core/testing';

import { LayoutConfigService } from './layout-config.service';

describe('LayoutConfigService', () => {
  let service: LayoutConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
