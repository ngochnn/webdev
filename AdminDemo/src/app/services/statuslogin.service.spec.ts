import { TestBed } from '@angular/core/testing';

import { StatusloginService } from './statuslogin.service';

describe('StatusloginService', () => {
  let service: StatusloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
