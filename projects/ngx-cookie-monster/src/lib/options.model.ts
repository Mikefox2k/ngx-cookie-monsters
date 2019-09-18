export interface Options {
  domain?: string;
  path?: string;
  expires?: string | number | Date;
  secure?: false;
  httpOnly?: false;
  storeEncoded?: false;
  sameSite?: 'none' | 'lax' | 'strict';
}
