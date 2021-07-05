import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZJF205UW62hqTtlXYF3CJQwebYy51_KA",
  authDomain: "mcne-615e2.firebaseapp.com",
  databaseURL: "https://mcne-615e2-default-rtdb.firebaseio.com",
  projectId: "mcne-615e2",
  storageBucket: "mcne-615e2.appspot.com",
  messagingSenderId: "519813243778",
  appId: "1:519813243778:web:952a9523bb54acc9ae659b",
  measurementId: "G-LNYBYDNQ46"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;