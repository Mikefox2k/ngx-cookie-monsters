import {CookieOptions} from './ngx-cookie-monster-options.model';

export function empty(item: any): boolean {
  return item === null || item === undefined;
}

export function exists(item: any): boolean {
  return item !== null && item !== undefined;
}

export function convertToDate(time: number | string): Date {
  return new Date(time);
}

export function merge(options: CookieOptions, newOptions?: CookieOptions): CookieOptions {
  if (newOptions) {
    return {
      domain: exists(newOptions.domain) ? newOptions.domain : options.domain,
      path: exists(newOptions.path) ? newOptions.path : options.path,
      expires: exists(newOptions.expires) ? newOptions.expires : options.expires,
      secure: exists(newOptions.secure) ? newOptions.secure : options.secure,
      httpOnly: exists(newOptions.httpOnly) ? newOptions.httpOnly : options.httpOnly,
      storeUnencoded: exists(newOptions.storeUnencoded) ? newOptions.storeUnencoded : options.storeUnencoded,
      sameSite: exists(newOptions.sameSite) ? newOptions.sameSite : options.sameSite
    };
  }
  return options;
}

export function safeDecodeURIComponent(str: string) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

export function safeJsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}
