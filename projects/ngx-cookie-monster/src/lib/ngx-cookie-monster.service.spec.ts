import {inject, TestBed} from '@angular/core/testing';

import {NgxCookieMonsterService} from './ngx-cookie-monster.service';
import {CookieModule} from "./ngx-cookie-monster.module";
import {CookieOptions} from "./ngx-cookie-monster-options.model";

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

  it('should edit the cookie', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'testKey';
    const oValue = 'old_value';
    const nValue = 'new_value';
    cookieService.create(key, oValue);
    expect(cookieService.get(key)).toBe(oValue);
    cookieService.create(key, nValue);
    expect(cookieService.get(key)).toBe(nValue);
  }));

  it('should create and get object', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'testObject';
    const value = { key1: 'val1', key2: 'val2' };
    cookieService.createFromObject(key, value);
    expect(cookieService.getObject(key)).toEqual(value);
  }));

  it('should delete cookie and exist false', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const key = 'test';
    cookieService.create(key, 'testi');
    expect(cookieService.exists(key)).toBeTruthy();
    cookieService.delete(key);
    expect(cookieService.exists(key)).toBeFalsy();
  }));

  it('should set and get multiple cookies', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const simpleCookies = [
      {key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'},
      {key: 'key3', value: 'value3'}
    ];
    const objectCookies = [
      {key: 'keyO1', value: {keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2'}},
      {key: 'keyO2', value: {keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2'}},
      {key: 'keyO3', value: {keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2'}}
    ];
    const result: any = {};
    simpleCookies.forEach(c => {
      result[c.key] = c.value;
      cookieService.create(c.key, c.value);
    });
    objectCookies.forEach(c => {
      result[c.key] = JSON.stringify(c.value);
      cookieService.createFromObject(c.key, c.value);
    });
    expect(cookieService.getAll()).toEqual(result);
  }));

  it('should delete all cookies', inject([NgxCookieMonsterService], (cookieService: NgxCookieMonsterService) => {
    const simpleCookies = [
      {key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'},
      {key: 'key3', value: 'value3'}
    ];
    const objectCookies = [
      {key: 'keyO1', value: {keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2'}},
      {key: 'keyO2', value: {keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2'}},
      {key: 'keyO3', value: {keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2'}}
    ];
    simpleCookies.forEach(c => {
      cookieService.create(c.key, c.value);
    });
    objectCookies.forEach(c => {
      cookieService.createFromObject(c.key, c.value);
    });
    cookieService.deleteAll();
    expect(cookieService.getAll()).toEqual({});
  }));

});
