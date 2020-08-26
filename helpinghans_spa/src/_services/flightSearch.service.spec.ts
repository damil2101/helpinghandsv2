/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightSearchService } from './flightSearch.service';

describe('Service: FlightSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightSearchService]
    });
  });

  it('should ...', inject([FlightSearchService], (service: FlightSearchService) => {
    expect(service).toBeTruthy();
  }));
});
