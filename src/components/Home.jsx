import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/users");
    }
  }, [isLoggedIn, navigate]);

  return <div>{isLoggedIn === null && <SignIn />}</div>;
}

export default Home;
