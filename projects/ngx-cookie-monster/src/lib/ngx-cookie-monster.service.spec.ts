import {getTestBed, TestBed} from '@angular/core/testing';

import {NgxCookieMonsterService} from './ngx-cookie-monster.service';
import {CookieModule} from "./ngx-cookie-monster.module";
import {Injector, Type} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {NgxCookieMonsterProvider} from "./ngx-cookie-monster-provider";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {BrowserTestingModule} from "@angular/platform-browser/testing";

describe('NgxCookieMonsterService', () => {

  let injector: Injector;
  let cookieService: NgxCookieMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot(),
        BrowserDynamicTestingModule,
        BrowserTestingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useClass: NgxCookieMonsterProvider},
        NgxCookieMonsterService
      ]
    });
    cookieService = TestBed.get(NgxCookieMonsterService as Type<NgxCookieMonsterService>);
  });

  it('should be created', () => {
    expect(NgxCookieMonsterService).toBeDefined(); // undefined weil kein InjectionToken
    expect(cookieService).toBeDefined(); // geht durch
    expect(cookieService instanceof NgxCookieMonsterService).toBeTruthy(); // NgxCookieMonsterService ist undefined
  });
});
