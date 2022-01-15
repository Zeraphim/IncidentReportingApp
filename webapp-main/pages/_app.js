import "tailwindcss/tailwind.css";
import "../assets/style.css";
import { initializeApp } from "firebase/app";
import Map from "../components/map";

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBWsp4MXqanRlKqTMkcw2ZS9Ape3VQcmoY",
    authDomain: "agap-3fe00.firebaseapp.com",
    projectId: "agap-3fe00",
    storageBucket: "agap-3fe00.appspot.com",
    messagingSenderId: "712555908833",
    appId: "1:712555908833:web:4e5b3f89979f89cec871a0",
    measurementId: "G-LVWRK0GBJ3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return <Component {...pageProps} />;
}

export default MyApp;
