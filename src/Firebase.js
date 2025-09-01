// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBEXGZI_b0NGrzfO2xxc-cEkxnM1IaJk",
  authDomain: "botzagency.firebaseapp.com",
  projectId: "botzagency",
  storageBucket: "botzagency.appspot.com",
  messagingSenderId: "1006474942367",
  appId: "1:1006474942367:web:396c2758ddca677fa2cfaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add email to waitlist
export const addToWaitlist = async (email) => {
  try {
    const docRef = await addDoc(collection(db, 'textlywaitlist'), {
      email: email,
      timestamp: serverTimestamp(),
      source: 'website_waitlist',
      status: 'pending'
    });
    console.log('Document written with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

export { db };