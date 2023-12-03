import { defineStore } from 'pinia'
import { auth, usersCollection } from '../includes/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      try {
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
      } catch (error) {
        console.error('Error during user registration:', error.message)
        throw error
      }
    }
  }
})
