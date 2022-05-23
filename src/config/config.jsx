// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvY8BgdmqL_JQClZquJa6nam5gaNw4gXA",
  authDomain: "barcode-project-fdb43.firebaseapp.com",
  projectId: "barcode-project-fdb43",
  storageBucket: "barcode-project-fdb43.appspot.com",
  messagingSenderId: "822571911079",
  appId: "1:822571911079:web:88a06e8c658fbbb845d882",
  measurementId: "G-48TX1RLGFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);