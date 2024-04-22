// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbSk4hpPlXkpgX8y03wUMkiGxICBidz8s",
    authDomain: "ecommerceadminpanel-4c804.firebaseapp.com",
    projectId: "ecommerceadminpanel-4c804",
    storageBucket: "ecommerceadminpanel-4c804.appspot.com",
    messagingSenderId: "949693277569",
    appId: "1:949693277569:web:b6cf815fa05d7d58bc3480"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }