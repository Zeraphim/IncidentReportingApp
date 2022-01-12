import React, { Component } from "react";
import OnboardingNavBar from "../components/navbar_onboarding";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import bcrypt from "bcryptjs";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { useEffect } from 'react'
import { useRouter } from 'next/router'



import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";


import cookie from "js-cookie";


export default function Signup() {

  // Firebase
  const [ loading, setLoading ] = useState(false);

  const { control, register, handleSubmit } = useForm();
  const city = 1;


  const [email, setEmail] = useState(" ");

  const handleInput = event => {
    setEmail(event.target.value);
  };


  async function handleSignup() {

    setLoading(true);
    // try {
      await signup(document.getElementById("email").value, document.getElementById("password").value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);

    console.log("Login Successful")

    window.location.replace('/login')
  }


  const setCity = (value) => {
    city = value;
  };
  const upload = (data) => {
    data["password"] = bcrypt.hashSync(data["password"], 8);
    data["city"] = options[city - 1].label;
    console.log(data);
    axios
      .post("http://localhost:5000/signup", data)
      .then(function (response) {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const options = [
    { value: "1", label: "Caloocan" },
    { value: "2", label: "Malabon" },
    { value: "3", label: "Navotas" },
    { value: "4", label: "Valenzuela" },
    { value: "5", label: "Quezon City" },
    { value: "6", label: "Marikina" },
    { value: "7", label: "Pasig" },
    { value: "8", label: "Taguig" },
    { value: "9", label: "Makati" },
    { value: "10", label: "Manila" },
    { value: "11", label: "Mandaluyong" },
    { value: "12", label: "San Juan" },
    { value: "13", label: "Pasay" },
    { value: "14", label: "Paranaque" },
    { value: "15", label: "Las Pinas" },
    { value: "16", label: "Muntinlupa" },
  ];
  return (
    
    <div className="h-screen">
      <OnboardingNavBar />
      <div className="mx-8 xl:mx-16 2xl:mx-64 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none justify-items-center items-center lg:h-3/4">
        <div className="row-span-1 lg:col-span-1 justify-items-center items-center p-5">
          <h1 className="font-extrabold text-5xl mb-5">
            Do your part in keeping your community safe.
          </h1>
          <p className="text-lg">
            By joining AGAP, you are helping keep your immediate community
            informed with everything happening around you, the same way they
            would for you.
          </p>
          <p className="mt-10 text-sm">
            Your registration is subject to AGAP's{" "}
            <a href="./terms">Terms and Conditions</a> and{" "}
            <a href="./privacy">Privacy Policy</a>
          </p>
        </div>
        <div className="row-span-1 lg:col-span-1 grow-0 p-5">
          <div className="p-6 shadow-lg rounded-lg">
            <form
              className="space-y-4"
              onSubmit={handleSubmit((data) => upload(data))}
            >
              <div className="grid grid-cols-2 space-x-4">
                <div className="col-span-1 space-y-2">
                  <label>First Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fname"
                    type="first_name"
                    placeholder="John"
                    {...register("fname", { required: true })}
                  ></input>
                </div>
                <div className="col-span-1 space-y-2">
                  <label>Last Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lname"
                    type="last_name"
                    placeholder="Doe"
                    {...register("lname", { required: true })}
                  ></input>
                </div>
              </div>{" "}
              {/* name div */}
              <div>
                <div>
                  <div className="space-y-2">
                    <label>Email</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="johndoe@agap.ph"
                      {...register("email", { required: true })}
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <label>Password</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <label>
                  Date of Birth
                  <br />
                </label>
                <Controller
                  control={control}
                  name="date-input"
                  render={({ field }) => (
                    <DatePicker
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
                />
              </div>
              <div>
                <div className="space-y-2">
                  <label>
                    City of Residence
                    <br />
                  </label>
                  <small className="text-xs text-gray-400">
                    If you don't see your city listed here then it may not be
                    supported by AGAP yet. Stay tuned for updates.
                  </small>
                  <div>
                    <Controller
                      control={control}
                      defaultValue={0}
                      name="city"
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
              <div>
                <button
                  class="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                  type="submit"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-500 text-center">
                  Already have an account?{" "}
                  <a href="./login" className="hover:text-black">
                    Login instead.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
