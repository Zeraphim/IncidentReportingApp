import React, { Component } from "react";

export default class Reputation extends Component {
  render() {
    return (
      <>
        <div className="p-5 bg-white h-auto rounded-md shadow">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <p>Post Reputation</p>
              <p className="font-bold font-number text-xl">0</p>
            </div>
            <div className="col-span-1">
              <p>Comment Reputation</p>
              <p className="font-bold font-number text-xl">0</p>
            </div>
          </div>
          {reputationStatus()}
        </div>
      </>
    );
  }
}

function reputationStatus() {
  const reputation = -10;
  const partner = false;

  if (partner) {
    return (
      <div className="p-3 bg-cyan-600 mt-3 rounded-md">
        <p className="font-bold text-md text-white">PARTNER</p>
        <p className="font-light text-sm text-white">
          Together, we make a safe community.
        </p>
      </div>
    );
  } else if (reputation > 100 && !partner) {
    return (
      <div className="p-3 bg-emerald-600 mt-3 rounded-md">
        <p className="font-bold text-md text-white">TRUSTED</p>
        <p className="font-light text-sm text-white">
          Thank you for helping keep your community safe.
        </p>
      </div>
    );
  } else if (reputation < 100 && !partner && reputation > 0) {
    return (
      <div className="p-3 bg-gray-500 mt-3 rounded-md">
        <p className="font-bold text-md text-white">USER</p>
        <p className="font-light text-sm text-white">
          Get 100 total reputation to earn a Trusted badge.
        </p>
      </div>
    );
  } else if (reputation < 0 && !partner) {
    return (
      <div className="p-3 bg-red-700 mt-3 rounded-md">
        <p className="font-bold text-md text-white">UNRELIABLE</p>
        <p className="font-light text-sm text-white">
          Get 20 total reputation to remove this badge.
        </p>
      </div>
    );
  }
}
