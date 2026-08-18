import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { 
  getAuth 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  // KEEP YOUR REAL FIREBASE CONFIGURATION HERE
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
