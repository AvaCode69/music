// user.js

import { defineStore } from 'pinia'
import { auth, usersCollection } from '../includes/firebase'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password)

      const userDocRef = doc(usersCollection, userCred.user.uid)
      await setDoc(userDocRef, {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await updateProfile(userCred.user, {
        displayName: values.name
      })

      this.userLoggedIn = true
    },

    async authenticate(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      this.userLoggedIn = true
    },
    async signOut() {
      await signOut(auth)
      window.location.reload()
      this.userLoggedIn = false
    }
  }
})
