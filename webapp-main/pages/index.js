import Head from "next/head";
import Reputation from "../components/reputation";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import NewPostModal from "../components/newPostModal";
import Weather from "../components/weather";

import cookie from "js-cookie";

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { NextApiRequest, NextApiResponses } from "next";
import Post from "../components/post";

import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";

// Checks if there's a cookie in the browser, if there's none redirect to login page
function checkSID() {

  const router = useRouter()

  console.log(cookie.get("SID"));

  if (cookie.get("SID") === undefined) {
    
    console.log("NO SID");

    // Redirect to login after 2 seconds
    useEffect(() => {
      setTimeout(() => {
        router.push('/login');
      }, 2000)
    }, [])
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

export default function Home() {

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const post = {
    // John Doe
    owner: currentUser?.email, //will change to owner_id. owner_id == user_id to fetch user data.
    user_type: 0,
    location: "Pelepens",
    content: {
      type: "text",
      caption: "This is a test.",
      date: "Now",
      content_link: "",
    },
  };

  return (
    <>
      {checkSID()}
      <Head>
        <title>AGAP - The Social Safety Network</title>
      </Head>
      <Navbar />
      <div className="flex grid grid-cols-10 justify-center mx-2 xl:mx-16 2xl:mx-64 gap-x-4">
        <div className="col-span-2 bg-gray-600 h-screen hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-gray-600 h-screen col-span-10 lg:col-span-5 overflow-auto">
          <Weather />
          <NewPostModal />
          <Post post={post} />
        </div>
        <div className="col-span-3 bg-gray-600 h-screen hidden lg:block">
          <Reputation />
        </div>
      </div>
    </>
  );
}
