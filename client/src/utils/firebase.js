import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "shinobiprep.firebaseapp.com",
  projectId: "shinobiprep",
  storageBucket: "shinobiprep.firebasestorage.app",
  messagingSenderId: "536749943728",
  appId: "1:536749943728:web:5c49f5e5acc599b035c475",
  measurementId: "G-DYTWK04Y91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider=new GoogleAuthProvider()

export{auth,provider}