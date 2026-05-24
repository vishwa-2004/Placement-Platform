import { initializeApp } from 'firebase/app'

import {
  getAuth,
} from 'firebase/auth'

import {
  getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvkwQGmBPwMXUVWo7mgyeic9_DTnMe2zo",
  authDomain: "placeai-5ade5.firebaseapp.com",
  projectId: "placeai-5ade5",
  storageBucket: "placeai-5ade5.firebasestorage.app",
  messagingSenderId: "305729715409",
  appId: "1:305729715409:web:1c2a6c035dfd542e8519f0",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export default app