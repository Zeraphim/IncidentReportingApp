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
import Post from "../components/post";

export default class PostFactory extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false, loaded: false, posts: [], uploading: [] };
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
    }, 2000);
  }

  render() {
    function addUploading(post) {
      const existingUploads = this.state.uploading;
      const updatedUploads = existingUploads.push(post);
      this.setState({ uploading: updatedUploads });
    }
    if (!this.state.ready) {
      return (
        <div className="flex bg-white flex-col mb-3 rounded shadow mt-3">
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
      if (this.state.posts.length == 0) {
        return (
          <div className="text-gray-400 text-md p-3">
            Seems like there are no reports in your location yet. If you've set
            the wrong location, you can change it{" "}
            <a
              href="/settings/location"
              className="text-gray-600 hover:text-black"
            >
              here
            </a>
          </div>
        );
      }
      return <PostRenderer posts={this.state.posts} />;
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
  await retrieveAndBundlePosts(data_list).then((data) => {
    data_list = data;
  });
  return data_list;
}

const PostRenderer = (props) => {
  const posts = props.posts;
  const post_components = [];
  posts.forEach((post) => {
    post_components.push(<Post post={post} />);
  });
  return <div className="flex flex-col space-y-2 mt-3">{post_components}</div>;
};
