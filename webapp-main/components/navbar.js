import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="w-full hidden lg:block mb-3 shadow">
        <nav class="bg-white border-gray-200 px-2 mx-8 xl:mx-16 2xl:mx-64 py-4 rounded dark:bg-gray-800">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex">
              <svg
                class="mr-3 h-10"
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
              <span class="self-center text-4xl font-extrabold whitespace-nowrap dark:text-white">
                AGAP
              </span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>{UserButton()}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function UserButton() {
  let username = "John Doe";
  return (
    <div className="px-5 py-2 bg-gray-200 rounded-3xl text-md hover:bg-gray-400">
      {username}
    </div>
  );
}
