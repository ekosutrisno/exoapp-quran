import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyABJfwdmhuBkA23t0WOwG5WoDRhNUG7vUw",
  authDomain: "exoapp-quran.firebaseapp.com",
  projectId: "exoapp-quran",
  storageBucket: "exoapp-quran.appspot.com",
  messagingSenderId: "922584328277",
  appId: "1:922584328277:web:355328be488b2199658cdc",
};

// Initaialize Firebase App
firebase.initializeApp(firebaseConfig);

// Init Firestore DB
const firestore = firebase.firestore();

// Activate Firebase Authentications
const auth = firebase.auth();
auth.useDeviceLanguage();

// Activate Sign With Google
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firestore, auth, googleProvider };
