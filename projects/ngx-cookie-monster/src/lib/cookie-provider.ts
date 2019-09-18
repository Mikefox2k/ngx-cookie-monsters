import {CookieOptions} from './cookie-options.model';
import {Inject, Injectable, InjectionToken, Injector, Type} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {merge} from './ext';

export const COOKIE_OPTIONS = new InjectionToken<CookieOptions>('COOKIE_OPTIONS');

@Injectable()
export class CookieProvider {

  private defaultCookieOptions: CookieOptions;
  private _cookieOptions: CookieOptions;

  constructor(@Inject(COOKIE_OPTIONS) options: CookieOptions = {}, private _injector: Injector) {
    this.defaultCookieOptions = {
      path: this._injector.get<string>(APP_BASE_HREF + '/' as unknown as Type<string>),
      domain: null,
      expires: null,
      secure: false,
      httpOnly: false,
      sameSite: 'none'
    };

    this._cookieOptions = merge(this.defaultCookieOptions, options);
  }

  get cookieOptions(): CookieOptions {
    return this._cookieOptions;
  }
}
