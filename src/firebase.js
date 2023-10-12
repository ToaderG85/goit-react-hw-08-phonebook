// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmvWhLMzMIdxoEoCCbLQmyI1GFFYxB4DE",
  authDomain: "logingoithw.firebaseapp.com",
  projectId: "logingoithw",
  storageBucket: "logingoithw.appspot.com",
  messagingSenderId: "318943904873",
  appId: "1:318943904873:web:305851f3c706d8ad878ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;