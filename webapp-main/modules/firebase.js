import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDocs, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWsp4MXqanRlKqTMkcw2ZS9Ape3VQcmoY",
  authDomain: "agap-3fe00.firebaseapp.com",
  projectId: "agap-3fe00",
  storageBucket: "agap-3fe00.appspot.com",
  messagingSenderId: "712555908833",
  appId: "1:712555908833:web:4e5b3f89979f89cec871a0",
  measurementId: "G-LVWRK0GBJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(data) {
  const email = data["email"];
  const password = data["password"];
  return createUserWithEmailAndPassword(auth, email, password).then((user) => {
    push_signup(user, data);
  });
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

async function push_signup(user, data) {
  const db = getFirestore();
  const ref = collection(db, "users");
  await setDoc(doc(ref, user.user.uid), {
    id: user.user.uid,
    fName: data.fname,
    lName: data.lname,
    city: data.city,
    email: data.email,
    points: {
      post_points: 0,
      comment_points: 0,
    },
    posts: {},
  });
}

export async function retrieveUserData(uid) {
  const db = getFirestore();
  const ref = doc(db, "users", uid);
  const querySnapshot = await getDoc(ref);
  return querySnapshot.data();
}
