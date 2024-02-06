import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCh5zS0Ff_0bUAHGXKUtRhFj6GWcydpU8",
  authDomain: "input-form-850ee.firebaseapp.com",
  projectId: "input-form-850ee",
  storageBucket: "input-form-850ee.appspot.com",
  messagingSenderId: "914778444049",
  appId: "1:914778444049:web:fc3a89f445148495d2fcb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);