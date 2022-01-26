import Head from "next/head";
import Reputation from "../components/reputation";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import NewPostModal from "../components/newPostModal";
import Weather from "../components/weather";
import { Redirect } from "react-router-dom";

import cookie from "js-cookie";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { NextApiRequest, NextApiResponses } from "next";
import Post from "../components/post";

import { useRef, useState } from "react";
import {
  signup,
  login,
  logout,
  useAuth,
  retrieveUserData,
} from "../modules/firebase";
import PostFactory from "../components/PostFactory";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";

// Checks if there's a cookie in the browser, if there's none redirect to login page
function checkSID() {
  const user = getAuth();
  const router = useRouter();

  if (user == undefined) {
    useEffect(() => {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }, []);
  }
}

// For testing
function addSID() {
  cookie.set("SID", "ABCD", { expires: 1 / 24 });
}

// For testing
function removeSID() {
  cookie.remove("SID");
}

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState({
    fName: "John",
    lName: "Doe",
    email: "nil",
    location: "nil",
    id: "AGAPWEBAPP",
    points: {
      post_points: 0,
      comment_points: 0,
    },
  });
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setCurrentUser(user);
      if (currentUser && loading) {
        loadData().then((data) => {
          setUserData(data);
          console.log(data);
          setLoading(false);
        });
      }
      // ...
    } else {
      window.location.replace("/login");
    }
  });

  async function loadData() {
    return await retrieveUserData(currentUser.uid);
  }

  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <Head>
          <title>User Settings | AGAP</title>
        </Head>
        <Navbar data={userData} />
        <div className="flex flex-col w-full my-10 justify-center items-center space-y-5">
          {userData.picture != undefined ? (
            <Image
              width={200}
              height={200}
              src={userData.picture}
              className="rounded-full shadow-lg bg-gray-200"
            />
          ) : (
            <Image
              width={200}
              height={200}
              src="/Profile.svg"
              className="rounded-full shadow-lg bg-gray-200"
            />
          )}
          <div className="flex flex-col justify-start items-center space-y-1.5">
            <h1 className="font-bold text-3xl">{`${userData.fName} ${userData.lName}`}</h1>
            <h3 className="text-xl font-number">{userData.email}</h3>
          </div>
        </div>
        <div className="flex grid grid-cols-7 justify-center mx-2 xl:mx-16 2xl:mx-64 gap-x-4">
          <div className="col-span-2 h-screen hidden lg:block">
            <div className="p-5 rounded-lg shadow-lg">
              <h3 className="text-gray-400 font-light">General</h3>
              <a className="font-bold text-xl">Profile Information</a>
            </div>
          </div>
          <div className=" h-screen col-span-10 lg:col-span-5 overflow-auto no-scrollbar flex flex-col space-y-5">
            <div className="p-5 rounded-lg shadow-md bg-yellow-500 text-white font-bold">
              <p>
                You need to include a picture of a valid government ID to fully
                verify your account.
              </p>
            </div>
            <div className="p-5 rounded-lg shadow-md">
              <p>Profile Image</p>
            </div>
            <div className="p-5 rounded-lg shadow-md">
              <p>Public Information</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
