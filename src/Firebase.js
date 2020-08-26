import firebase from "firebase/app";
import firestore  from "firebase/firestore";
import auth  from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDHkgk9u1V89oaoXYjiYicl0aWo5eZgE8s",
    authDomain: "suneita-fed40.firebaseapp.com",
    databaseURL: "https://suneita-fed40.firebaseio.com",
    projectId: "suneita-fed40",
    storageBucket: "suneita-fed40.appspot.com",
    messagingSenderId: "618168914468",
    appId: "1:618168914468:web:c050bbfd6bec7aadd9beb1",
    measurementId: "G-8ZY6H51TWH"

};


// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()

export const au = fb.auth()