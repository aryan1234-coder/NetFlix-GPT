// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRi3OI3tL0UZPk8xIv7E7KGgOQLBqDZ_w",
  authDomain: "netflixgpt-c907f.firebaseapp.com",
  projectId: "netflixgpt-c907f",
  storageBucket: "netflixgpt-c907f.appspot.com",
  messagingSenderId: "48056378539",
  appId: "1:48056378539:web:58fb99b50ac1d4325cc3ee",
  measurementId: "G-XRYB5NBFK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();