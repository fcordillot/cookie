# @fcordillot/cookie
> A simple Cookie manager in JavaScript

## Installation
### ES5
```html
<script src="https://cdn.jsdelivr.net/npm/@fcordillot/cookie"></script>
```

### NPM
```shell
$ npm i @fcordillot/cookie
```
```js
import Cookie from '@fcordillot/cookie'
````

## Usage
```js
import Cookie from '@fcordillot/cookie'

Cookie.setCookie('myCookie', 'Hello World!')

// Optionnaly you can set a duration in days
// Default duration is 365 days (1 year)
Cookie.setCookie('myCookie', 'Hello World!', 12) // will expire in 12 days
Cookie.setCookie('myCookie', 'Hello World!', 1 / 24) // will expire in 1 hour

const cookie = Cookie.getCookie('myCookie') // Returns "Hello World!"
```