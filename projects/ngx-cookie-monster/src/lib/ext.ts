import {CookieOptions} from './cookie-options.model';

export function exists(item: any): boolean {
  return item !== null && item !== undefined;
}

export function merge(options: CookieOptions, newOptions?: CookieOptions): CookieOptions {
  if (!newOptions) {
    return options;
  }
  return {
    domain: exists(newOptions.domain) ? newOptions.domain : options.domain,
    path: exists(newOptions.path) ? newOptions.path : options.path,
    expires: exists(newOptions.expires) ? newOptions.expires : options.expires,
    secure: exists(newOptions.secure) ? newOptions.secure : options.secure,
    httpOnly: exists(newOptions.httpOnly) ? newOptions.httpOnly : options.httpOnly,
    storeEncoded: exists(newOptions.storeEncoded) ? newOptions.storeEncoded : options.storeEncoded,
    sameSite: exists(newOptions.sameSite) ? newOptions.sameSite : options.sameSite
  };
}
