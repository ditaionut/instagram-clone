import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVjeV-ngaw6VrIsihpOcw9tYX1Yyuy0aY",
    authDomain: "instagram-clone-react-9a42d.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-9a42d.firebaseio.com",
    projectId: "instagram-clone-react-9a42d",
    storageBucket: "instagram-clone-react-9a42d.appspot.com",
    messagingSenderId: "146462210934",
    appId: "1:146462210934:web:14456f556c0ef2bbf0d857",
    measurementId: "G-ZD33D44XX7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };