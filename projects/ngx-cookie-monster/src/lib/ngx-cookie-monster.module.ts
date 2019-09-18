import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieOptions } from './cookie-options.model';
import {COOKIE_OPTIONS, CookieProvider} from './cookie-provider';
import {NgxCookieMonsterService} from './ngx-cookie-monster.service';
import {cookieFactory} from './cookie-factory';

@NgModule({
  providers: [CookieProvider]
})
export class CookieModule {
  /**
   * Use this method  to provide the CookieService
   */
  static forRoot(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: NgxCookieMonsterService, useFactory: cookieFactory, deps: [CookieProvider]}
      ]
    };
  }

  /**
   * Use this method (in non root modules) to import the directive/pipe
   */
  static forChild(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: NgxCookieMonsterService, useFactory: cookieFactory, deps: [CookieProvider]}
      ]
    };
  }
}
