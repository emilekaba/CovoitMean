import { TestBed, inject } from '@angular/core/testing';

import { AjoutrajetService } from './ajoutrajet.service';

describe('AjoutrajetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjoutrajetService]
    });
  });

  it('should be created', inject([AjoutrajetService], (service: AjoutrajetService) => {
    expect(service).toBeTruthy();
  }));
});
