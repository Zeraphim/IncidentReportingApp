import Head from "next/head";
import Reputation from "../components/reputation";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import NewPostModal from "../components/newPostModal";
import Weather from "../components/weather";
import { Redirect } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
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
  const { control, register, handleSubmit } = useForm();
  const options = [
    { value: "1", label: "Caloocan", id: "caloocan" },
    { value: "2", label: "Malabon", id: "malabon" },
    { value: "3", label: "Navotas", id: "navotas" },
    { value: "4", label: "Valenzuela", id: "valenzuela" },
    { value: "5", label: "Quezon City", id: "qc" },
    { value: "6", label: "Marikina", id: "marikina" },
    { value: "7", label: "Pasig", id: "pasig" },
    { value: "8", label: "Taguig", id: "taguig" },
    { value: "9", label: "Makati", id: "makati" },
    { value: "10", label: "Manila", id: "manila" },
    { value: "11", label: "Mandaluyong", id: "mandaluyong" },
    { value: "12", label: "San Juan", id: "sanjuan" },
    { value: "13", label: "Pasay", id: "pasay" },
    { value: "14", label: "Paranaque", id: "paranaque" },
    { value: "15", label: "Las Pinas", id: "laspinas" },
    { value: "16", label: "Muntinlupa", id: "muntinlupa" },
  ];
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
        <div className="w-full hidden lg:block mb-3 shadow py-3 bg-white">
          <nav className="flex grid grid-cols-10 gap-x-4 mx-8 xl:mx-16 2xl:mx-64 items-center">
            <a href="../" className="flex col-span-2 items-center">
              <Image src="/AGAP.png" width={40} height={40} />
              <span className="self-center text-4xl font-extrabold whitespace-nowrap dark:text-white ml-2">
                AGAP
              </span>
            </a>
            <div className="col-span-5"></div>
            <div className="col-span-3 flow-root">
              <div className="hidden w-full md:block md:w-auto flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center float-right">
                <a
                  href="../"
                  className="px-5 py-2 rounded-lg shadow bg-blue-400 text-white font-bold hover:shadow-inner hover:bg-white hover:text-black"
                >
                  Return to Feed
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full lg:hidden mb-3 shadow py-3 bg-blue-600">
          <nav className="gap-x-4 mx-8 xl:mx-16 2xl:mx-64 items-center">
            <a
              href="../"
              className="flex flex-row space-x-3 items-center font-bold text-white"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Return to Feed</p>
            </a>
          </nav>
        </div>
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
        <div className="grid grid-cols-7 justify-center mx-2 xl:mx-16 2xl:mx-64 gap-x-4">
          <div className="col-span-2 hidden lg:block">
            <div className="p-5 rounded-lg shadow-lg bg-white">
              <h3 className="text-gray-400 font-light">General</h3>
              <a className="font-bold text-xl">Profile Information</a>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-5 flex flex-col space-y-5 p-3">
            {userData.governmentID == undefined ? (
              <div className="p-5 rounded-lg shadow-md bg-yellow-500 text-white font-bold">
                <p>
                  You need to include a picture of a valid government ID to
                  fully verify your account.
                </p>
              </div>
            ) : (
              <></>
            )}

            <div className="p-5 rounded-lg shadow-md font-number text-semibold bg-white">
              <p className="font-number font-semibold">
                Profile Image and Government ID
              </p>
            </div>
            <div className="p-5 rounded-lg shadow-md space-y-3 flex flex-col bg-white">
              <p className="font-number font-semibold">Public Information</p>
              <div className="p-3 rounded-lg text-sm text-white bg-yellow-400">
                A single AGAP account should only be used by a single person.
                You should only change your name if you made a mistake upon
                registration. <b>Falsified names are a bannable offense.</b>
              </div>
              <label className="text-gray-400 text-sm">Name</label>
              <div className="grid grid-cols-2 w-full space-x-2">
                <input
                  placeholder={userData.fName}
                  className="col-span-1 p-2 rounded shadow-inner"
                />
                <input
                  placeholder={userData.lName}
                  className="col-span-1 p-2 rounded shadow-inner"
                />
              </div>
            </div>
            <div className="p-5 rounded-lg shadow-md font-number text-semibold space-y-1 bg-white">
              <p className="font-number font-semibold">Location</p>
              <div>
                <label className="text-xs text-gray-400">
                  The location you set here determines the posts you see on your
                  feed. Leaving this empty will keep your set location
                  unchanged.
                </label>
                <Controller
                  control={control}
                  defaultValue={0}
                  name="city_id"
                  render={({ onChange, value, name, ref }) => (
                    <Select
                      inputRef={ref}
                      classNamePrefix="addl-class"
                      options={options}
                      value={options.find((c) => c.value === value)}
                      onChange={(val) => setCity(val.value)}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
