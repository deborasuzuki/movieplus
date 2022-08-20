/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieplusService } from './movieplus.service';

describe('Service: Movieplus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieplusService]
    });
  });

  it('should ...', inject([MovieplusService], (service: MovieplusService) => {
    expect(service).toBeTruthy();
  }));
});
