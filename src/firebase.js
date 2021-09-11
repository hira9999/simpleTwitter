import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD080SvM73iN338g1XsePLMfUtHgxkTIjs",
  authDomain: "simple-twitter-32a2f.firebaseapp.com",
  projectId: "simple-twitter-32a2f",
  storageBucket: "simple-twitter-32a2f.appspot.com",
  messagingSenderId: "590488015934",
  appId: "1:590488015934:web:607e140a3eb83967fded6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDB = firebaseApp.firestore();


