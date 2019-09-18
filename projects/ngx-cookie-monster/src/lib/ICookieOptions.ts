import {CookieOptions} from './cookie-options.model';

export interface ICookieOptions {
  get(key: string): string;
  getObject(key: string): Object;
  getAll(): Object;
  create(key: string, value: string, options?: CookieOptions): void;
  update(key: string, value: string, options?: CookieOptions): void;
  updateOptions(key: string, options?: CookieOptions): void;
  delete(key: string, options?: CookieOptions): void;
  deleteAll(options?: CookieOptions): void;
  addTime(key: string, time: number | string | Date): void;
}