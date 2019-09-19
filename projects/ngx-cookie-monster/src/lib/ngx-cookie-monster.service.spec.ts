import {getTestBed, TestBed} from '@angular/core/testing';

import { NgxCookieMonsterService } from './ngx-cookie-monster.service';
import {CookieModule} from "./ngx-cookie-monster.module";
import {Injector} from "@angular/core";

describe('NgxCookieMonsterService', () => {

  let injector: Injector;
  let cookieService: NgxCookieMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot()
      ]
    });
    injector = getTestBed();
    cookieService = injector.get(NgxCookieMonsterService);
  });

  it('should be created', () => {
    const service: NgxCookieMonsterService = TestBed.get(NgxCookieMonsterService);
    expect(service).toBeTruthy();
  });
});
