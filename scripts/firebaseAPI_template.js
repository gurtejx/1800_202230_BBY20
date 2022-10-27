//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBbJg0w-2P8Lymk9tJ2hT2ckj3e65s0knQ",
    authDomain: "comp1800-68813.firebaseapp.com",
    projectId: "comp1800-68813",
    storageBucket: "comp1800-68813.appspot.com",
    messagingSenderId: "402868765863",
    appId: "1:402868765863:web:b017860ee3baa7caa14782",
    measurementId: "G-J7FZK500V4"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();