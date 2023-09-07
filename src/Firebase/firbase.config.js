// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCujslBHkzCU-PNr45Jv_5h_hu1xUpf9jg",
  authDomain: "collaborative-task-manag-c1fa3.firebaseapp.com",
  projectId: "collaborative-task-manag-c1fa3",
  storageBucket: "collaborative-task-manag-c1fa3.appspot.com",
  messagingSenderId: "909175797612",
  appId: "1:909175797612:web:746c388da9a6d018d12549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app