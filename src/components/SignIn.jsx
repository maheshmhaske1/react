import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/login.css";
import { toast } from "react-toastify";
import { adminLogin } from "./HTTP/Api";

function SignIn() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(mobile);
    console.log(password);
    if (!mobile || !password) {
      toast.error("mobile and password cant be empty");
    }
    if (mobile !== "Mahesh" || password !== "Mahi@3332") {
      toast.error("invalid credentials");
    }

    if (mobile === "Mahesh" && password === "Mahi@3332") {
      toast.success("logged in");
      localStorage.setItem("isLoggedIn", true);
      navigate("/users");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rm" }}
            >
              <div className="card-body">
                <h4 className="text-center">Login</h4>
                <div className="mb-3">
                  <input
                    id="login-input"
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    id="login-input"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  id="login-btn"
                  className="btn text-white bg-dark mb-3"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
