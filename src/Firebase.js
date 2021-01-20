import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWt3_jHFzef3xDemTiHoLcT05E7jGUgXQ",
  authDomain: "apps-b85c4.firebaseapp.com",
  databaseURL: "https://apps-b85c4.firebaseio.com",
  projectId: "apps-b85c4",
  storageBucket: "apps-b85c4.appspot.com",
  messagingSenderId: "849171746892",
  appId: "1:849171746892:web:3c882da157140eba4024e9",
  measurementId: "G-KB85HEXE35",

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };