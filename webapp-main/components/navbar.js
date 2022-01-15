import React, { Component } from "react";
import defaultUser from "../assets/Profile.svg";

export default class Navbar extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="w-full hidden lg:block mb-3 shadow py-3">
        <nav className="flex grid grid-cols-10 gap-x-4 mx-8 xl:mx-16 2xl:mx-64 items-center">
          <a href="#" className="flex col-span-2 items-center">
            <svg
              className="mr-3 h-10"
              viewBox="0 0 52 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                fill="#76A9FA"
              />
              <path
                d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                fill="#A4CAFE"
              />
              <path
                d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                fill="#1C64F2"
              />
            </svg>
            <span className="self-center text-4xl font-extrabold whitespace-nowrap dark:text-white">
              AGAP
            </span>
          </a>
          <div className="col-span-5"></div>
          <div className="col-span-3 flow-root">
            <div className="hidden w-full md:block md:w-auto flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center float-right">
              {UserButton(this.props.data)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function UserButton(data) {
  let username = `${data.fName} ${data.lName}`;
  return (
    <button className="px-5 py-2 bg-gray-200 rounded-3xl text-md hover:bg-gray-400 flex flex-row items-center">
      <img className="mr-5" src={defaultUser} />
      <p className="mr-16">{username}</p>
      <svg
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d="M9.875 1.3125L5.5 5.6875L1.125 1.3125"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
