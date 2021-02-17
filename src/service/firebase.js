import firebase from "firebase/app";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyABJfwdmhuBkA23t0WOwG5WoDRhNUG7vUw",
  authDomain: "exoapp-quran.firebaseapp.com",
  projectId: "exoapp-quran",
  storageBucket: "exoapp-quran.appspot.com",
  messagingSenderId: "922584328277",
  appId: "1:922584328277:web:355328be488b2199658cdc",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
