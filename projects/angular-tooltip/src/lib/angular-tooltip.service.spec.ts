import { TestBed, inject } from '@angular/core/testing';

import { AngularTooltipService } from './angular-tooltip.service';

describe('AngularTooltipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTooltipService]
    });
  });

  it('should be created', inject([AngularTooltipService], (service: AngularTooltipService) => {
    expect(service).toBeTruthy();
  }));
});
