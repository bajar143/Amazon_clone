// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh77YYDPoVMbyz_qBeNLA85SuX84Lk3Y8",
  authDomain: "challenge-c119e.firebaseapp.com",
  projectId: "challenge-c119e",
  storageBucket: "challenge-c119e.appspot.com",
  messagingSenderId: "305862616267",
  appId: "1:305862616267:web:b11d30c68424de7d92a74e",
  measurementId: "G-4X183P2NE1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};