// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KxwGswScn--xOVlatZCaoctxyIBXEQA",
  authDomain: "turbotrade-753dc.firebaseapp.com",
  projectId: "turbotrade-753dc",
  storageBucket: "turbotrade-753dc.appspot.com",
  messagingSenderId: "314383696201",
  appId: "1:314383696201:web:10f4432c093120d8619a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app