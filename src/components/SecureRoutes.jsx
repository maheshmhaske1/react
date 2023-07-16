import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SecureRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
}

export default SecureRoutes;
