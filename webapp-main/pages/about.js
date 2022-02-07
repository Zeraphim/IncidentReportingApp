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
import MobileNavBar from "../components/mobile_navbar";

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

export default function About() {
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
          setLoading(false);
        });
      }
      // ...
    } else {
     
    }
  });

  // const Map= dynamic(() => import("../components/map"),{
  //   loading: () => "Loading...",
  //   ssr: false
  // });

  const emailRef = useRef();
  const passwordRef = useRef();

  const post = {
    // John Doe
    owner: 0, //will change to owner_id. owner_id == user_id to fetch user data.
    user_type: 0,
    location: "Pelepens",
    content: {
      type: "text",
      caption: "This is a test.",
      date: "Now",
      content_link: "",
    },
  };
  useEffect(() => {}, []);

  async function loadData() {
    return await retrieveUserData(currentUser.uid);
  }

  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <div className="h-screen w-screen relative">
        <Head>
          <title>AGAP - The Social Safety Network</title>
        </Head>
        <Navbar data={userData} />
        

    {/* Section 1 */}

    <div class="container items-center max-w-6xl mx-auto xl:px-5 px-2 py-32 md:px-0">
    <div class="flex flex-wrap items-center sm:-mx-3">
      <div class="w-full md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline text-[#308C8F]">AGAP keeps you up with what's going on in the Metro,</span>
            <span class="block text-[#10B4DA] xl:inline">right here and right now.</span>
          </h1>
          <div class="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#login" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#308C8F] rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Go To AGAP Home
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/About%20Us%2FAmazon%201999.jpg?alt=media&token=b93ce659-3721-4f9d-bb60-2a98de5fab66"></img>
          </div>
      </div>
    </div>
  </div>


    {/* Section 2 */}

    <div  class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">


    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/About%20Us%2FSecurity.png?alt=media&token=b8e40bf4-fdf0-455f-9c49-b75cde611d61" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "></img>
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                About
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-3xl">
                Making metro more mindful.
            </p>

        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Through AGAP, we look forward to giving real-time and reliable information, particularly addressing relevant incidents such as crime, accidents, missing persons, or disasters inside the National Capital Region (NCR).
            </p>

        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/About%20Us%2Ftechnology.png?alt=media&token=665ad912-81ff-4afc-aed5-f3731fd733d1" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"></img>
        </div>
    </div>

    </div>


    {/* Section 3 */}

    <div class="w-full py-12 bg-white lg:py-24">



    </div>

      </div>
    );
  }
}
