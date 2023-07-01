import React, { useEffect, useState } from "react";
import "./css/login.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function SignIn() {
  useEffect(() => {}, []);

  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState();
  const [status, setStatus] = useState(0);

  const handleSendOtp = async () => {
    setStatus(1);
  };

  const handleLogin = async () => {};

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rm" }}
            >
              <div className="card-body">
                <h4 className="text-center">Login</h4>
                {status === 0 && (
                  <>
                    <div className="mb-3">
                      <input
                        id="login-input"
                        type="text"
                        className="form-control"
                        placeholder="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <button
                      id="login-btn"
                      className="btn text-white bg-dark mb-3"
                      onClick={() => handleSendOtp()}
                    >
                      Send Otp
                    </button>
                  </>
                )}
                {status === 1 && (
                  <>
                    <p className="text-success">
                      Otp sent on {mobile}
                      <i
                        class="bi bi-pencil-square"
                        onClick={() => {
                          setStatus(0);
                        }}
                      ></i>
                    </p>
                    <div className="mb-3">
                      <input
                        id="login-input"
                        type="text"
                        className="form-control"
                        placeholder="Otp"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <button
                      id="login-btn"
                      className="btn text-white bg-dark mb-3"
                      onClick={() => handleSendOtp()}
                    >
                      Verify & Login
                    </button>
                  </>
                )}
                <hr />
                Don't have account?
                <Link to={"/register"}>Create</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// justify-content-center

export default SignIn;
