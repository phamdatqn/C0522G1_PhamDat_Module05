import {TestBed} from '@angular/core/testing';

import {DictionaryUtilService} from './dictionary-util.service';

describe('DictionaryUtilService', () => {
  let service: DictionaryUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
