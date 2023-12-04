// firebase.js

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCNWHeQO4yNmKZyC--DKw0KU1qPp_sY0PY',
  authDomain: 'music-ea4b4.firebaseapp.com',
  projectId: 'music-ea4b4',
  storageBucket: 'music-ea4b4.appspot.com',
  messagingSenderId: '761094701221',
  appId: '1:761094701221:web:cdf01a5f61071d41658d4c'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

const usersCollection = collection(db, 'users')

export { auth, db, usersCollection }
