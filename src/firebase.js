import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiRpH_lzKGfVVlAUPyJSiyk5cmXAr-ynI",
  authDomain: "challenge-167ca.firebaseapp.com",
  databaseURL: "https://challenge-167ca.firebaseio.com",
  projectId: "challenge-167ca",
  storageBucket: "challenge-167ca.appspot.com",
  messagingSenderId: "633420187282",
  appId: "1:633420187282:web:02f101ebb99ec32318484b",
  measurementId: "G-X9CQYGH66F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
