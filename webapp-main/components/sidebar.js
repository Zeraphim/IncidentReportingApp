import React, { Component } from "react";
import Link from "next/link";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="p-5 bg-white h-auto rounded-lg shadow-lg invisible lg:visible">
          <ul className="text-xl text-slate-900 font-bold 2xl:text-2xl space-y-3 mb-5">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/maps">
                <a>Live Map</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          <div className="mb-5">
            <p>Your current location is</p>
            <p className="text-xl font-bold">
              {this.props.user.city}, Philippines
            </p>
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
