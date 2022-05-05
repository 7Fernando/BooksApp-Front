import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

export const app = firebase.initializeApp({
    "projectId": "bookflix-admin",
    "appId": "1:1000615282577:web:0ebc65053e387346c83c30",
    "storageBucket": "bookflix-admin.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDMmASPowqCqZQzZzai-CTEAJurfBqqbUI",
    "authDomain": "bookflix-admin.firebaseapp.com",
    "messagingSenderId": "1000615282577"
  });




