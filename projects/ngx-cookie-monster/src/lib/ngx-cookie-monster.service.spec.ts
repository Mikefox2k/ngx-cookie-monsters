import {inject, TestBed} from '@angular/core/testing';

import {NgxCookieMonsterService} from './ngx-cookie-monster.service';
import {CookieModule} from "./ngx-cookie-monster.module";

describe('NgxCookieMonsterService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot(),
      ]
    });
  });

  afterEach(inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    cookieService.deleteAll();
  }));

  it('should be defined', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    expect(NgxCookieMonsterService).toBeDefined();
    expect(cookieService).toBeDefined();
    expect(cookieService instanceof NgxCookieMonsterService).toBeTruthy();
  }));

  it('should create and get cookie', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'test';
    const value = 'valu';
    cookieService.create(key, value);
    expect(cookieService.get(key)).toBe(value);
  }));

  it('should return undefined for non existing cookie', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'nonExistentCookieKey';
    expect(cookieService.get(key)).toBeUndefined();
  }));

  it('should return empty value for cookie', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'emptyValue';
    const value = '';
    cookieService.create(key, value);
    expect(cookieService.get(key)).toBe('');
  }));

  it('should get as string with getObject if  cannot deserialize', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'testObject';
    const value = 'testValue';
    cookieService.create(key, value);
    expect(cookieService.getObject(key)).toBe(value);
  }));

});
