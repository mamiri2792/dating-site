import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtWNtQOds1m_wwz3J5sOYSe5KtXujpwLs",
  authDomain: "dating-site-6f3a9.firebaseapp.com",
  projectId: "dating-site-6f3a9",
  storageBucket: "dating-site-6f3a9.firebasestorage.app",
  messagingSenderId: "822201581440",
  appId: "1:822201581440:web:9fff8f196c2e1dffb54b65",
  measurementId: "G-WTCQB1LGNP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
