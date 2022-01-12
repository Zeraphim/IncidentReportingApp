import React, { useEffect, useState } from "react";
import { firebase } from "../modules/firebase";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
// Initialize Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function PostFactory(user) {
  const db = getFirestore();
  useEffect(() => {
    retrieve(db);
  }, []);

  return <>Post Factory Placeholder</>;
}

async function retrieve(db) {
  const querySnapshot = await getDocs(collection(db, "posts"));
}
