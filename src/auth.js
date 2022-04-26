class Auth {

  constructor (storage) {
    this.ttl = 15
    this.storage = storage
    this.email = null
    this.authenticated = false
  }

  isAuthenticated () {
    var value = this.storage.get('auth.authenticated')

    return (value && value === true)
  }

  logout () {
    this.storage.remove('auth.email')
    this.storage.remove('auth.authenticated')
  }

  setAuthenticated (email) {
    this.storage.set('auth.email', email, this.ttl)
    this.storage.set('auth.authenticated', true, this.ttl)
  }

  setGuest () {
    this.storage.set('auth.email', null, this.ttl)
    this.storage.set('auth.authenticated', false, this.ttl)
  }
}

export default Auth
