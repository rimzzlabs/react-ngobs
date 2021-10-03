import firebase from 'firebase'

const apiKey = import.meta.env.VITE_API_KEY
const authDomain = import.meta.env.VITE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_PROJECT_ID
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_APP_ID
const measurementId = import.meta.env.VITE_MEASUREMENT_ID

const app = firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
})

export const db = app.firestore()
export const auth = app.auth()
