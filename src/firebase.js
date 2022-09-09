import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQzsPoDSL8tqqzHEvhFoq5bdgl4aypBGY",
  authDomain: "slack-clone-5dfd9.firebaseapp.com",
  projectId: "slack-clone-5dfd9",
  storageBucket: "slack-clone-5dfd9.appspot.com",
  messagingSenderId: "643266803487",
  appId: "1:643266803487:web:53293c12a17f66b199222a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
