import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR4tYXyr8m6m6sEs_uinNZcso6KmCB0fQ",
  authDomain: "africanventurecounsel.firebaseapp.com",
  projectId: "africanventurecounsel",
  storageBucket: "africanventurecounsel.appspot.com",
  messagingSenderId: "950378588809",
  appId: "1:950378588809:web:56ae1601f1fcca6947f458",
  measurementId: "G-48WS6M2JYJ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
