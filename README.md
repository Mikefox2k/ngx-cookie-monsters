# ngx-cookie-monsters
>

## Table of contents:
- [Getting Started](#get-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [CookieService](#cookieservice)
  - [get()](#get)
  - [getObject()](#getobject)
  - [getAll()](#getall)
  - [exists()](#exists)
  - [create()](#create)
  - [createObject()](#createobject)
  - [createCookieOptions()](#createcookieoptions)
  - [updateOptions()](#updateoptions)
  - [delete()](#delete)
  - [deleteAll()](#deleteall)
- [Options](#options)
- [Future](#future)

## <a name="get-started"></a> Getting Started

### <a name="installation"></a> Installation

You can install this package locally with npm.
To get the latest stable version and update package.json file:
```bash
npm install ngx-cookie-monsters --save
```

### <a name="usage"></a> Usage

`CookieModule` should be registered in the `AppModule` with `forRoot()` static method and with `forChild()` in the child modules.\
These methods accepts `CookieOptions` objects as well. Leave it blank for the defaults.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieModule } from 'ngx-cookie-monster';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, CookieModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';
import { NgxCookieMonsterService } from 'ngx-cookie-monster';

@Component({
    selector: 'nom-nom-nom',
    template: '<h1>come to the dark side, we have cookies</h1>'
})

export class AppComponent { 
  constructor(private cookieService: NgxCookieMonsterService){}
  
  getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
```

## <a name="cookieservice"></a> CookieService

### <a name="get"></a> get()
Returns the value of given cookie key.

```typescript
/**
 * @param key ID for lookup.
 * @returns Raw cookie value as string.
 */
get(key: string): string;
```

### <a name="getobject"></a> getObject()
Returns a deserialized Object of given cookie.

```typescript
/**
 * @param key Id to use for lookup.
 * @returns deserialized cookied value.
 */
getObject(key: string): Object;
```

### <a name="getall"></a> getAll()
Returns a key value object with all cookies

```typescript
/**
 * @returns All cookies
 */
getAll(): any;
```

### <a name="exists"></a> exists()
Evaluates if cookie exists

```typescript
/**
 * @param key ID for lookup
 * @returns cookie existance
 */
exists(key: string): boolean;
```

### <a name="create"></a> create()
Create a cookie for the given key

```typescript
/**
 * @param key ID
 * @param value stored raw.
 * @param (Optional) Options object.
 */
create(key: string, value: string, options?: CookieOptions): void;
```

### <a name="createobject"></a> createObject()
Create a cookie with an object of values

```typescript
/**
 * @param key ID
 * @param value stored serialized
 * @param (Optional) Options object.
 */
createFromObject(key: string, value: Object, options?: CookieOptions): void;
```

### <a name="remove"></a> remove()
Removes specific cookie

```typescript
/**
 * @param key ID for lookup
 */
remove(key: string): void;
```

### <a name="removeall"></a> removeAll()
Removes all cookies.

```typescript
/**
 */
removeAll(): void;
```

## <a name="options"></a> Options

Options object should be a type of `CookieOptions` interface. The object may have following properties:

- **domain** - {string} - The cookie will be available only for this domain and
  its sub-domains. For security reasons the user agent will not accept the cookie
- **path** - {string} - The cookie will be available only for this path and its
  sub-paths. By default, this is the URL that appears in your `<base>` tag.
  if the current domain is not a sub-domain of this domain or equal to it.
- **expires** - {string | number | Date} - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT",
  number of the form milliseconds or minutes or hours
  or a Date object indicating the exact date/time this cookie will expire.
- **secure** - {boolean} - If `true`, then the cookie will only be available through a
  secured connection.
- **httpOnly** - {boolean} - If `true`, then the cookie will be set with the `HttpOnly`
  flag, and will only be accessible from the remote server. Helps to prevent against
  XSS attacks.
- **storeUnencoded** - {boolean} - If `true`, then the cookie value will not be encoded and
  will be stored as provided.
- **sameSite** - {'none' | 'lax' | 'strict'} - If `strict`, then it will prevent the cookie
  from being sent by the brwoser to the target site in all cross-site browsing context.
  If `lax`, then it will provide a reasonable balance between security and usabillity for websites
  that want to maintain user's logged-in session after the user arrives from an external link.
