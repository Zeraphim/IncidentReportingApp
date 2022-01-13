import React, { Component, useEffect, useState } from "react";
import { firebase } from "../modules/firebase";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
// Initialize Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default class PostFactory extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  render() {
    if (this.state.ready) {
      return <>Loaded</>;
    } else {
      retrieve(this.props.user).then((snap) => {
        snap.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
        this.setState({ ready: true });
      });
      return <>Loading...</>;
    }
  }
}

async function retrieve(user) {
  const db = getFirestore();
  const querySnapshot = await getDocs(
    collection(db, "posts", `location/${user.city_id}`)
  );
  return querySnapshot;
}
