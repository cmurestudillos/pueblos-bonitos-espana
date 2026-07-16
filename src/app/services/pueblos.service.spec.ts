import { TestBed } from '@angular/core/testing';

import { PueblosService } from './pueblos.service';

describe('PueblosService', () => {
  let service: PueblosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PueblosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
