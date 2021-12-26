import React, { Component } from "react";
import Link from "next/link";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="p-5 bg-gray-100 h-auto rounded-md shadow invisible lg:visible">
          <ul className="text-xl text-slate-900 font-bold 2xl:text-2xl space-y-3 mb-5">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/map">
                <a>Live Map</a>
              </Link>
            </li>
            <li>
              <Link href="/notifications">
                <a>Notifications</a>
              </Link>
            </li>
          </ul>
          <div className="mb-5">
            <p>Your current location is</p>
            <p className="text-xl font-bold">Makati, Philippines</p>
            <Link href="/settings/location">
              <a>Is this wrong?</a>
            </Link>
          </div>

          <div className="text-xs">
            <p>
              <a href="/privacy">Privacy Policy</a> |{" "}
              <a href="/terms">Terms and Conditions</a>
            </p>
            <p>The AGAP Team (C) 2021</p>
          </div>
        </div>
      </>
    );
  }
}