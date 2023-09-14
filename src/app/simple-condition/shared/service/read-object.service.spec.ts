import { TestBed } from '@angular/core/testing';

import { ReadObjectService } from './read-object.service';

describe('ReadObjectService', () => {
  let service: ReadObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
