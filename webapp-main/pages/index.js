import Head from "next/head";
import { Redirect } from "react-router-dom";

import cookie from "js-cookie";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { NextApiRequest, NextApiResponses } from "next";

import { useRef, useState } from "react";

// Checks if there's a cookie in the browser, if there's none redirect to login page
function checkCookie() {
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

export default function Home() {
  return (
    <>
      <div>Hi</div>
    </>
  );
}
