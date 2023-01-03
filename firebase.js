import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDM572LjAdLNesX_DeG-WSyhOXmb_eRMWI",
  authDomain: "gifted-chat-fbdab.firebaseapp.com",
  projectId: "gifted-chat-fbdab",
  storageBucket: "gifted-chat-fbdab.appspot.com",
  messagingSenderId: "480069158133",
  appId: "1:480069158133:web:9d418685c4b9f2e569b1bc"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

