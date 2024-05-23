// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWRiZx3H1biQPHeHeiapYvg_noKHIwG5I',
  authDomain: 'weather-app-6e721.firebaseapp.com',
  projectId: 'weather-app-6e721',
  storageBucket: 'weather-app-6e721.appspot.com',
  messagingSenderId: '434487804431',
  appId: '1:434487804431:web:6fc3465eb7ff199fe2997a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
