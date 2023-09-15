import { TestBed } from '@angular/core/testing';

import { ReadFieldService } from './comparison-operator.service';

describe('ReadFieldService', () => {
  let service: ReadFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
