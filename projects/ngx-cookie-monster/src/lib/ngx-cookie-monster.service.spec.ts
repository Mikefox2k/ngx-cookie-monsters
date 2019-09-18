import { TestBed } from '@angular/core/testing';

import { NgxCookieMonsterService } from './ngx-cookie-monster.service';

describe('NgxCookieMonsterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCookieMonsterService = TestBed.get(NgxCookieMonsterService);
    expect(service).toBeTruthy();
  });
});
