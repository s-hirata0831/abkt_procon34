// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXV6S6Bw7T6-MTJBGJoefMPnZR88oBNcM",
  authDomain: "abkt-procon34.firebaseapp.com",
  projectId: "abkt-procon34",
  storageBucket: "abkt-procon34.appspot.com",
  messagingSenderId: "498882491840",
  appId: "1:498882491840:web:560192e77b56181ef8c425",
  measurementId: "G-JD2640010B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;