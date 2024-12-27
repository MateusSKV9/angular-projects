import { TestBed } from '@angular/core/testing';

import { Animals2Service } from './animals2.service';

describe('Animals2Service', () => {
  let service: Animals2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animals2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
