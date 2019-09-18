import {CookieProvider} from './cookie-provider';
import {NgxCookieMonsterService} from './ngx-cookie-monster.service';

export function cookieFactory(cookieProvider: CookieProvider): NgxCookieMonsterService {
  return new NgxCookieMonsterService(cookieProvider);
}
