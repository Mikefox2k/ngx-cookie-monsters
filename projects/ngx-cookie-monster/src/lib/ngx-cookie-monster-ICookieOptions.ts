import {CookieOptions} from './ngx-cookie-monster-options.model';

export interface NgxCookieMonsterICookieOptions {
  exists(key: string): boolean;

  get(key: string): string;

  getObject(key: string): Object;

  getAll(): Object;

  create(key: string, value: string, options?: CookieOptions): void;

  createFromObject(key: string, value: Object, options?: CookieOptions): void;

  updateOptions(key: string, options?: CookieOptions): void;

  delete(key: string, options?: CookieOptions): void;

  deleteAll(options?: CookieOptions): void;
  deleteOptions(key: string, options: CookieOptions): void; /* Feature v1.4 */
  deleteAllOptions(options: CookieOptions): void; /* Feature v1.4 */

  createCookieOptions(domain: string, path: string, expires: Date | null, secure: boolean, httpOnly: boolean,
                      storeUnencoded: boolean, sameSite: 'none' | 'lax' | 'strict'): CookieOptions;
}
