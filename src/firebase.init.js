// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzVqvj0D1J_MExY-6k4nCy8FR4OiMg8rk",
  authDomain: "eleanor-atwood.firebaseapp.com",
  projectId: "eleanor-atwood",
  storageBucket: "eleanor-atwood.appspot.com",
  messagingSenderId: "682735914818",
  appId: "1:682735914818:web:6c9911afb2c70cd950c2db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
