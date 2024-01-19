import { TestBed } from '@angular/core/testing';

import { QRMenuCodeService } from './qrmenu-code.service';

describe('QRMenuCodeService', () => {
  let service: QRMenuCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRMenuCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
