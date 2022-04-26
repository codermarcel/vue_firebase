/**
 * Created by user on 4/19/17.
 */

import Firebase from 'firebase'

class FirebaseAuth {

  constructor (config) {
    this.authenticated = false
    this.firebase = Firebase.initializeApp(config)
  }

  getEmail () {
    if (!this.isAuthenticated()) {
      return null
    }

    return this.firebase.auth().currentUser.email
  }

  isAuthenticated () {
    return this.firebase.auth().currentUser !== null
  }

  logout () {
    this.firebase.auth().signOut()
    this.authenticated = false
  }

  login (email, password, callback) {
    this.firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      callback(error)
    })
  }

  register (email, password) {
    // this.firebase.auth().createUserWithEmailAndPassword(email, password)
  }

}

export default FirebaseAuth
