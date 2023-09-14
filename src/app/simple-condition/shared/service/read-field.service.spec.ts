import { TestBed } from '@angular/core/testing';

import { ReadFieldService } from './read-field.service';

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
