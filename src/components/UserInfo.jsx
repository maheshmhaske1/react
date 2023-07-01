import React from 'react'
import Navbar from './Navbar'

function UserInfo() {
    return (
        <>
            <Navbar />
            <div className="card shadow p-3 mb-5 m-2">
                <div className="card-body">

                    <h3 className='text-center'>User Info</h3>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div class="card" >
                                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-760x400.webp" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5> Name:</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default UserInfo