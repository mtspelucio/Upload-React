// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB3dEZOD9MEtGV-jG5rm2u6YVr3My7qRtU",
  authDomain: "react-upload-d0d9e.firebaseapp.com",
  projectId: "react-upload-d0d9e",
  storageBucket: "react-upload-d0d9e.appspot.com",
  messagingSenderId: "584160619708",
  appId: "1:584160619708:web:139c95bb5b1f7094e934b9",
  measurementId: "G-PMV2YT5M6S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);