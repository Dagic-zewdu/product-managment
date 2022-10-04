// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDG3-x1QO4lX5BXbB--ZP6UW5xSah-ieHY',
  authDomain: 'product-managent.firebaseapp.com',
  projectId: 'product-managent',
  storageBucket: 'product-managent.appspot.com',
  messagingSenderId: '344506991921',
  appId: '1:344506991921:web:b7fef01f86f17229fd5c10',
  measurementId: 'G-F9T7DT64WR',
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(fireBaseApp);
export const db = getFirestore();
export const productsCollection = collection(db, 'products');
