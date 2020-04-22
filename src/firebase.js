import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyB7lnx1299zhXMJyN9tzzkQYKXsjadHV3o",
  authDomain: "nf-main-website.firebaseapp.com",
  databaseURL: "https://nf-main-website.firebaseio.com",
  projectId: "nf-main-website",
  storageBucket: "nf-main-website.appspot.com",
  messagingSenderId: "663211229298",
  appId: "1:663211229298:web:f37b7cb8bf5829f65482eb",
  measurementId: "G-0521T4Z39Y"
};
firebase.initializeApp(firebaseConfig);
export default firebase;