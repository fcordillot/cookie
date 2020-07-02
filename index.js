export default {
  /**
   * @param  {String} name: Name of the cookie
   * @param  {String} value: Value of the cookie
   * @param  {Number} days=365: Duration of the cookie. Default is 365 (1 year)
   */
  set: (name, value, days = 365) => {
    let expires = ''

    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

      expires = `; expires=${date.toUTCString()}`
    }
    document.cookie = `${name}=${(value || '')}${expires}; domain=${window.location.hostname}; path=/`
  },

  /**
   * @param {String} name: Name of the cookie
   */
  get: name => {
    const nameEQ = `${name}=`

    const ca = document.cookie.split(';')

    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i]

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length)
      }

      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }

    return null
  },

  /**
   * @param {String} name: Name of the cookie
   */
  remove: name => {
    document.cookie = `${name}= ;expires = Thu, 01 Jan 1970 00:00:01 GMT; domain=${window.location.hostname}; path=/`
  }
}
  