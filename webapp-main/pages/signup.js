import React, { Component } from "react";
import OnboardingNavBar from "../components/navbar_onboarding";

export default class Signup extends Component {
  render() {
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
              <form className="space-y-4">
                <div className="grid grid-cols-2 space-x-4">
                  <div className="col-span-1 space-y-2">
                    <label>First Name</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fname"
                      type="first_name"
                      placeholder="John"
                    ></input>
                  </div>
                  <div className="col-span-1 space-y-2">
                    <label>Last Name</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lname"
                      type="last_name"
                      placeholder="Doe"
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
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    class="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                    type="submit"
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
}
