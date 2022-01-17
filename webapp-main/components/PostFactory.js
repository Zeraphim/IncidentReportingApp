import React, { Component, useEffect, useState } from "react";
import {
  firebase,
  retrieveAndBundlePosts,
  retrieveUserData,
} from "../modules/firebase";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
// Initialize Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default class PostFactory extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false, loaded: false, posts: {}, uploading: [] };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.loaded && !this.state.ready) {
        this.setState({ ready: true });
      } else if (!this.state.loaded) {
        console.log("State change");
        retrieve(this.props.user).then((docs) => {
          PostLoader(docs.docs).then((posts) => {
            this.setState({ posts: posts, loaded: true });
          });
        });
      }
    }, 5000);
  }

  render() {
    function addUploading(post) {
      const existingUploads = this.state.uploading;
      const updatedUploads = existingUploads.push(post);
      this.setState({ uploading: updatedUploads });
    }
    if (!this.state.ready) {
      return (
        <div className="flex bg-white flex-col mb-3 rounded shadow">
          <div className="h-1/6 grid grid-cols-2">
            <div className="col-span-1 pl-3 pt-3 flex flex-row items-center">
              <div className="mr-3">
                <svg height="50" width="50">
                  <circle cx="25" cy="25" r="20" fill="gray" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">Loading content...</div>
              </div>
            </div>
          </div>
          <div className="h-4/6 p-3">
            <p className="text-gray-400 text-sm">
              TIP: Sometimes, careful decisions are just as effective as fast
              response. When possible, calm yourself down and analyze every
              possible approach to the situation.
              <br />
            </p>
          </div>
        </div>
      );
    } else {
      return <>{this.state.posts[0].owner}</>;
    }
  }
}

/*if (this.state.ready) {
      return <>Loaded</>;
    } else {
      retrieve(this.props.user).then((snap) => {
        snap.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
        this.setState({ ready: true });
      });
      return <>Loading...</>;
    } */
async function retrieve(user) {
  const db = getFirestore();
  const querySnapshot = await getDocs(
    collection(db, "posts", `location/${user.city_id}`)
  );
  console.log(querySnapshot.size);
  return querySnapshot;
}

async function PostLoader(posts) {
  const data_list = [];
  posts.forEach((doc) => data_list.push(doc.data()));
  console.log(data_list);
  retrieveAndBundlePosts(data_list).then((data) => console.log(data));
  return data_list;
}
