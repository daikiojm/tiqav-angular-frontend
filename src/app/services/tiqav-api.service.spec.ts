import { TestBed, inject } from '@angular/core/testing';

import { TiqavApiService } from './tiqav-api.service';

describe('TiqavApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiqavApiService]
    });
  });

  it(
    'should be created',
    inject([TiqavApiService], (service: TiqavApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
