import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoj-lrDZW0aV1icbzuATsUPVtqmkli_Rw",
  authDomain: "swasthvritta-store.firebaseapp.com",
  projectId: "swasthvritta-store",
  storageBucket: "swasthvritta-store.appspot.com",
  messagingSenderId: "87852426452",
  appId: "1:87852426452:web:b367b17abaf8a0d97e0741",
  measurementId: "G-6DMYTWGS8B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };