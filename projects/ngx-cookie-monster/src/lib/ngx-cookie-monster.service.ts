import {Injectable} from '@angular/core';
import {CookieOptions} from './cookie-options.model';
import {CookieProvider} from './cookie-provider';
import {ICookieOptions} from './ICookieOptions';

declare interface Document {
  cookie: string;
}

declare const document: Document;

@Injectable()
export class NgxCookieMonsterService implements ICookieOptions{

  protected options: CookieOptions;

  protected get cookieString(): string {
    return document.cookie || '';
  }

  protected set cookieString(val: string) {
    document.cookie = val;
  }

  constructor(private _provider: CookieProvider) {
    this.options = this._provider.cookieOptions;
  }

  addTime(key: string, time: number | string | Date): void {
  }

  create(key: string, value: string, options?: CookieOptions): void {
  }

  delete(key: string, options?: CookieOptions): void {
  }

  deleteAll(options?: CookieOptions): void {
  }

  get(key: string): string {
    return "";
  }

  getAll(): Object {
    return undefined;
  }

  getObject(key: string): Object {
    return undefined;
  }

  update(key: string, value: string, options?: CookieOptions): void {
  }

  updateOptions(key: string, options?: CookieOptions): void {
  }


}
