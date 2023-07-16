import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./404";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Users from "./Users";
import UserInfo from "./UserInfo";
import Classes from "./Classes";
import Subjects from "./Subjects";
import Chapters from "./Chapters";
import SecureRoutes from "./SecureRoutes";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/users" element={<SecureRoutes Component={Users} />} />
        <Route
          path="/users/detail"
          element={<SecureRoutes Component={UserInfo} />}
        />
        <Route path="/class" element={<SecureRoutes Component={Classes} />} />
        <Route
          path="/subject"
          element={<SecureRoutes Component={Subjects} />}
        />
        <Route
          path="/chapter"
          element={<SecureRoutes Component={Chapters} />}
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default Pages;
