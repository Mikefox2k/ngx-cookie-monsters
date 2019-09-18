import {Injectable} from '@angular/core';
import {CookieOptions} from './ngx-cookie-monster-options.model';
import {NgxCookieMonsterProvider} from './ngx-cookie-monster-provider';
import {NgxCookieMonsterICookieOptions} from './ngx-cookie-monster-ICookieOptions';
import {convertToDate, empty, merge, safeDecodeURIComponent, safeJsonParse} from './ngx-cookie-monster-ext';

declare interface Document {
  cookie: string;
}

declare const document: Document;

@Injectable()
export class NgxCookieMonsterService implements NgxCookieMonsterICookieOptions {

  protected options: CookieOptions;

  constructor(private _provider: NgxCookieMonsterProvider) {
    this.options = this._provider.cookieOptions;
  }

  protected get cookieString(): string {
    return document.cookie || '';
  }

  protected set cookieString(val: string) {
    document.cookie = val;
  }

  create(key: string, value: string, options?: CookieOptions): void {
    this._cookieWriter()(key, value, options);
  }

  createFromObject(key: string, value: Object, options?: CookieOptions): void {
    this.create(key, JSON.stringify(value), options);
  }

  delete(key: string, options?: CookieOptions): void {
    this._cookieWriter()(key, undefined, options);
  }

  deleteAll(options?: CookieOptions): void {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => {
      this.delete(key, options);
    });
  }

  get(key: string): string {
    return (<any> this._cookieReader())[key];
  }

  getAll(): Object {
    return <any> this._cookieReader();
  }

  getObject(key: string): Object {
    const value = this.get(key);
    return value ? safeJsonParse(value) : value;
  }

  updateOptions(key: string, options?: CookieOptions): void {
    const tempCookie = this.getObject(key);
    this.createFromObject(key, tempCookie, options);
  }

  private _cookieReader(): Object {
    let lastCookies = {};
    let lastCookieString = '';
    let cookie: string, index: number, name: string;
    const currentCookieString = this.cookieString;
    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      lastCookies = {};

      lastCookieString.split('; ').forEach(value => {
        cookie = value;
        index = cookie.indexOf('=');
        if (index > 0) {
          name = safeDecodeURIComponent(cookie.substring(0, index));
          if (empty((<any> lastCookies)[name])) {
            (<any> lastCookies)[name] = safeDecodeURIComponent(cookie.substring(index + 1));
          }
        }
      });
    }
    return lastCookies;
  }

  private _cookieWriter() {
    const self = this;

    return function(name: string, value: string, options?: CookieOptions) {
      self.cookieString = self._buildCookieString(name, value, options);
    };
  }

  private _buildCookieString(name: string, value: string, options?: CookieOptions): string {
    const opts: CookieOptions = merge(this.options, options);
    let expires: any = opts.expires;
    if (empty(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    expires = convertToDate(expires);
    const cookieValue = opts.storeUnencoded ? value : encodeURIComponent(value);
    let str = encodeURIComponent(name) + '=' + cookieValue;
    str += opts.path ? ';path=' + opts.path : '';
    str += opts.domain ? ';domain=' + opts.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += opts.sameSite ? ';samesite=' + opts.sameSite : '';
    str += opts.secure ? ';secure' : '';
    str += opts.httpOnly ? '; HttpOnly' : '';

    const cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      console.warn(`Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`);
    }
    return str;
  }

}
