import {ModuleWithProviders, NgModule} from '@angular/core';
import {CookieOptions} from './ngx-cookie-monster-options.model';
import {COOKIE_OPTIONS, NgxCookieMonsterProvider} from './ngx-cookie-monster-provider';
import {NgxCookieMonsterService} from './ngx-cookie-monster.service';
import {ngxCookieMonsterFactory} from './ngx-cookie-monster-factory';

@NgModule({
  providers: [NgxCookieMonsterProvider]
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
        {provide: NgxCookieMonsterService, useFactory: ngxCookieMonsterFactory, deps: [NgxCookieMonsterProvider]}
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
        {provide: NgxCookieMonsterService, useFactory: ngxCookieMonsterFactory, deps: [NgxCookieMonsterProvider]}
      ]
    };
  }
}
