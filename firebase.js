// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtWNtQOds1m_wwz3J5sOYSe5KtXujpwLs",
  authDomain: "dating-site-6f3a9.firebaseapp.com",
  projectId: "dating-site-6f3a9",
  storageBucket: "dating-site-6f3a9.firebasestorage.app",
  messagingSenderId: "822201581440",
  appId: "1:822201581440:web:9fff8f196c2e1dffb54b65",
  measurementId: "G-WTCQB1LGNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
