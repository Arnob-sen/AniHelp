// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt4YcvVlP69XY_Wlhf-H1I1lm1ZsD-oOo",
  authDomain: "fir-react-a64ef.firebaseapp.com",
  databaseURL: "https://fir-react-a64ef-default-rtdb.firebaseio.com",
  projectId: "fir-react-a64ef",
  storageBucket: "fir-react-a64ef.appspot.com",
  messagingSenderId: "926349986877",
  appId: "1:926349986877:web:f592cf75709477329d6e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};