import {NgxCookieMonsterProvider} from './ngx-cookie-monster-provider';
import {NgxCookieMonsterService} from './ngx-cookie-monster.service';

export function ngxCookieMonsterFactory(cookieProvider: NgxCookieMonsterProvider): NgxCookieMonsterService {
  return new NgxCookieMonsterService(cookieProvider);
}
