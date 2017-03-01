import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAr4Cn2hcm8TLktuQOpyNQ4asOKsTtNH-8",
  authDomain: "hows-it-taste.firebaseapp.com",
  databaseURL: "https://hows-it-taste.firebaseio.com",
  storageBucket: "hows-it-taste.appspot.com",
  messagingSenderId: "155852310132"
};

firebase.initializeApp(config);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database();
