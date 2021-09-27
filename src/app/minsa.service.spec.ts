import { TestBed } from '@angular/core/testing';

import { MinsaService } from './minsa.service';

describe('MinsaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinsaService = TestBed.get(MinsaService);
    expect(service).toBeTruthy();
  });
});
