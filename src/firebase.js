// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOTHkVmjo6x87zugLfXoH0J4F9-2Aijdk",
  authDomain: "todos-caec3.firebaseapp.com",
  projectId: "todos-caec3",
  storageBucket: "todos-caec3.appspot.com",
  messagingSenderId: "896161552379",
  appId: "1:896161552379:web:1a5f6ddf92225a770a9d5e",
  databaseURL: "https://todos-caec3-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;