/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyCodeService } from './my-code.service';

describe('MyCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCodeService]
    });
  });

  it('should ...', inject([MyCodeService], (service: MyCodeService) => {
    expect(service).toBeTruthy();
  }));
});
