import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwWKP1pw6EIgT4n8u77bNH_03Aw2_pesU",
    authDomain: "jankenpon-575ef.firebaseapp.com",
    projectId: "jankenpon-575ef",
    storageBucket: "jankenpon-575ef.appspot.com",
    messagingSenderId: "197934354518",
    appId: "1:197934354518:web:97f453a7aee28720fcabf7",
    measurementId: "G-F3W7NQXV45"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
