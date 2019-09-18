import {CookieOptions} from './ngx-cookie-monster-options.model';

export interface NgxCookieMonsterICookieOptions {
  get(key: string): string;

  getObject(key: string): Object;

  getAll(): Object;

  create(key: string, value: string, options?: CookieOptions): void;

  createFromObject(key: string, value: Object, options?: CookieOptions): void;

  updateOptions(key: string, options?: CookieOptions): void;

  delete(key: string, options?: CookieOptions): void;

  deleteAll(options?: CookieOptions): void;
}
