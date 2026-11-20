
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agentx-8c459.firebaseapp.com",
  projectId: "agentx-8c459",
  storageBucket: "agentx-8c459.firebasestorage.app",
  messagingSenderId: "981502399963",
  appId: "1:981502399963:web:69b76283dfe721725983fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };