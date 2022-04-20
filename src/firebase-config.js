// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGVi8bOgzZ51ARIDxSkTe1oXpZJ3GJxAU",
  authDomain: "first-react-app-b42c0.firebaseapp.com",
  projectId: "first-react-app-b42c0",
  storageBucket: "first-react-app-b42c0.appspot.com",
  messagingSenderId: "884794036962",
  appId: "1:884794036962:web:80d74e865927329db344bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
