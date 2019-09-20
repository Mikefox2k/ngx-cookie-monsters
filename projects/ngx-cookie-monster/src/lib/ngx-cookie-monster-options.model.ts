/**
 * @name CookieOptionsArgs
 * @description
 *
 * Object containing default options to pass when setting cookies.
 *
 * - **domain** - {string} - The cookie will be available only for this domain and
 *   its sub-domains. For security reasons the user agent will not accept the cookie
 * - **path** - {string} - The cookie will be available only for this path and its
 *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
 *   if the current domain is not a sub-domain of this domain or equal to it.
 * - **expires** - {string | number | Date} - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT",
 *   number of the form milliseconds or minutes or hours
 *   or a Date object indicating the exact date/time this cookie will expire.
 * - **secure** - {boolean} - If `true`, then the cookie will only be available through a
 *   secured connection.
 * - **httpOnly** - {boolean} - If `true`, then the cookie will be set with the `HttpOnly`
 *   flag, and will only be accessible from the remote server. Helps to prevent against
 *   XSS attacks.
 * - **storeUnencoded** - {boolean} - If `true`, then the cookie value will not be encoded and
 *   will be stored as provided.
 * - **sameSite** - {'none' | 'lax' | 'strict'} - If `strict`, then it will prevent the cookie
 *   from being sent by the brwoser to the target site in all cross-site browsing context.
 *   If `lax`, then it will provide a reasonable balance between security and usabillity for websites
 *   that want to maintain user's logged-in session after the user arrives from an external link.
 */
export interface CookieOptions {
  domain?: string;
  path?: string;
  expires?: string | number | Date;
  secure?: boolean;
  httpOnly?: boolean;
  storeUnencoded?: boolean;
  sameSite?: 'none' | 'lax' | 'strict';
}
