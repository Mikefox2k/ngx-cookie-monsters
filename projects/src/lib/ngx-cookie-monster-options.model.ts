export interface CookieOptions {
  domain?: string;
  path?: string;
  expires?: string | number | Date;
  secure?: boolean;
  httpOnly?: boolean;
  storeUnencoded?: boolean;
  sameSite?: 'none' | 'lax' | 'strict';
}
