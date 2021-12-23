import React, { Component } from "react";

export default class Reputation extends Component {
  render() {
    return (
      <>
        <div className="p-5 bg-gray-100 h-auto rounded-md shadow invisible lg:visible">
          <div className="grid grid-cols-2 mb-3">
            <div className="col-span-1">
              <p className="text-sm 2xl:text-md">Post Reputation</p>
              <p className="font-bold font-number text-2xl">0</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm 2xl:text-md">Comment Reputation</p>
              <p className="font-bold font-number text-2xl">0</p>
            </div>
          </div>
          {reputationStatus()}
        </div>
      </>
    );
  }
}

function reputationStatus() {
  const reputation = 400;
  const partner = false;
  let result = <></>;

  if (partner) {
    result = (
      <div className="p-3 bg-cyan-600 rounded-md">
        <p className="font-bold text-md text-white">PARTNER</p>
        <p className="font-light text-sm text-white">
          Together, we make a safe community.
        </p>
      </div>
    );
  } else if (reputation > 100 && !partner) {
    result = (
      <div className="p-3 bg-emerald-600 rounded-md">
        <p className="font-bold text-md text-white">TRUSTED</p>
        <p className="font-light text-sm text-white">
          Thank you for helping keep your community safe.
        </p>
      </div>
    );
  } else if (reputation < 100 && !partner && reputation > 0) {
    result = (
      <div className="p-3 bg-gray-500 rounded-md">
        <p className="font-bold text-md text-white">USER</p>
        <p className="font-light text-sm text-white">
          Get 100 total reputation to earn a Trusted badge.
        </p>
      </div>
    );
  } else if (reputation < 0 && !partner) {
    result = (
      <div className="p-3 bg-red-700 rounded-md">
        <p className="font-bold text-md text-white">UNRELIABLE</p>
        <p className="font-light text-sm text-white">
          Get 20 total reputation to remove this badge.
        </p>
      </div>
    );
  }

  return result;
}
