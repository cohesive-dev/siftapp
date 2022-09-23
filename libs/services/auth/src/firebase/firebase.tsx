import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAzL_2jiVBhmiIUFGs2z6-cDR-Hgoedh3k',
  authDomain: 'sift-react.firebaseapp.com',
  databaseURL: 'https://sift-react.firebaseio.com',
  projectId: 'sift-react',
  storageBucket: 'sift-react.appspot.com',
  messagingSenderId: '369173776768',
  appId: '1:369173776768:web:895ded916749deebd31965',
  measurementId: 'G-976YVMRB4R',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

export {
  db,
  auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
