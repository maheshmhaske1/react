import React, { useState } from "react";
import "./css/Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logOut } from "./HTTP/Api";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("isLoggedIn"); // Clear the isLoggedIn key from localStorage
    navigate("/");
  };
  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light m-2"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" aria-current="page" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/users"}
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/class"}
                >
                  Classes
                </Link>
              </li>
            </ul>
            <button
              id="btn-logout"
              className="btn"
              type="submit"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
