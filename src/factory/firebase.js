import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBrNfmy8QE3CjT7d6vMZbl8hmhbUbahRCU",
    authDomain: "coderhouse-ecommerce-eguren.firebaseapp.com",
    projectId: "coderhouse-ecommerce-eguren",
    storageBucket: "coderhouse-ecommerce-eguren.appspot.com",
    messagingSenderId: "241618420186",
    appId: "1:241618420186:web:db41034840af479cda40e3"
  });

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
