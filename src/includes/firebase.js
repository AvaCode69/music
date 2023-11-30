import firebase from 'firebase/compat/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCNWHeQO4yNmKZyC--DKw0KU1qPp_sY0PY',
  authDomain: 'music-ea4b4.firebaseapp.com',
  projectId: 'music-ea4b4',
  storageBucket: 'music-ea4b4.appspot.com',
  messagingSenderId: '761094701221',
  appId: '1:761094701221:web:cdf01a5f61071d41658d4c'
}

export default firebase.initializeApp(firebaseConfig)
