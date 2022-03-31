import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_iIKSwaTS_w2MmRPw4a6qlAkp68_Y5Lk",
    authDomain: "linkedin-clone-lucky.firebaseapp.com",
    projectId: "linkedin-clone-lucky",
    storageBucket: "linkedin-clone-lucky.appspot.com",
    messagingSenderId: "1070195176306",
    appId: "1:1070195176306:web:6b2894ae691d58e5b4e3eb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}