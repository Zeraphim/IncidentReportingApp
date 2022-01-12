import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWsp4MXqanRlKqTMkcw2ZS9Ape3VQcmoY",
    authDomain: "agap-3fe00.firebaseapp.com",
    projectId: "agap-3fe00",
    storageBucket: "agap-3fe00.appspot.com",
    messagingSenderId: "712555908833",
    appId: "1:712555908833:web:4e5b3f89979f89cec871a0",
    measurementId: "G-LVWRK0GBJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
