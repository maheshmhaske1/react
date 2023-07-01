import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {

    useEffect(() => {

    })

    const [mobile, setMobile] = useState()
    const [otp, setOtp] = useState()
    const [name, setName] = useState()
    const [email, setMEmail] = useState()
    const [board, setBoard] = useState()
    const [className, setClassName] = useState()
    const [status, setStatus] = useState(0)

    const handleSendOtp = async () => {
        setStatus(1)
    }
    const handleCreateAccount = async () => {

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rm" }}>
                            <div className="card-body">
                                <h4 className='text-center'>Create Account</h4>

                                {
                                    status === 0 &&
                                    <>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="text"
                                                className="form-control"
                                                placeholder="mobile"
                                                onChange={(e) => setMobile(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            id='login-btn'
                                            className='btn text-white bg-dark mb-3'
                                            onClick={() => handleSendOtp()}
                                        >
                                            Send Otp
                                        </button>
                                    </>
                                }


                                {
                                    status === 1 &&
                                    <>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="text"
                                                className="form-control"
                                                placeholder="mobile"
                                                onChange={(e) => setMobile(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="text"
                                                className="form-control"
                                                placeholder="OTP"
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="text"
                                                className="form-control"
                                                placeholder="name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="text"
                                                className="form-control"
                                                placeholder="email"
                                                onChange={(e) => setMEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="password"
                                                className="form-control"
                                                placeholder="Board"
                                                onChange={(e) => setBoard(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id='login-input'
                                                type="password"
                                                className="form-control"
                                                placeholder="Class"
                                                onChange={(e) => setClassName(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            id='login-btn'
                                            className='btn text-white bg-dark'
                                            onClick={() => handleCreateAccount()}
                                        >
                                            Create Account
                                        </button>
                                    </>
                                }

                                <hr />
                                Already have an account?
                                <Link to={'/login'}>login</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp