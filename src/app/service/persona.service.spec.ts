import { TestBed } from '@angular/core/testing';

import { PerssonaService } from './persona.service';

describe('PerssonaService', () => {
  let service: PerssonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerssonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
